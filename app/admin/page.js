// app/admin/page.js
import styles from './Admin.module.css';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const AdminPage = () => {

  return (
    <div className={styles.adminPage}>
        <h1>Welcome to the Admin Page</h1>
        <a href="/api/auth/logout">Logout</a>
    </div>
  );
};

export default withPageAuthRequired(AdminPage);