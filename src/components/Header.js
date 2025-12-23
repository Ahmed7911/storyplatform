
import SearchBar from "./SearchBar";
import UserProfileIcon from "./UserProfileIcon";
import"./Header.css";
import NotificationBell from "./NotificationBell";
export default function Header() {
  return (
    <header className="mainHeader" role="banner">
      <div className="searchDivLeft" aria-label="sarch here">
        <SearchBar />
      </div>

      <div className="notificationsImage" aria-label="Logo">
        <NotificationBell notificatBell={notificatBell}/>
      </div>

      <div className="userProfileRight" aria-label="User Account ">
        <UserProfileIcon />
      </div>
    </header>
  );
}
