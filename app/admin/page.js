// app/admin/page.js
import styles from './Admin.module.css';
import { redirect } from "next/navigation";
import {getKindeServerSession, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Admin() {
  const { isAuthenticated } = getKindeServerSession();

  return (await isAuthenticated()) ? (
    <div className={styles.adminPage}>
      <h1>Welcome to the Admin Page</h1>
      <LogoutLink>Log out</LogoutLink>
    </div>
  ) : (
    redirect('/api/auth/login')
  );
}