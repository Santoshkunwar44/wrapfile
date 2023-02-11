import React from 'react'
import styles from "./SideList.module.css"
import { Link } from "react-router-dom"
const SideList = () => {
    return (
        <div className={styles.sideList}>
            <Link to="rooms">
                <div className={styles.sideItem}>
                    <img src="https://img.icons8.com/officel/40/null/slack.png" alt='roomIcon' />
                    <p>Rooms</p>

                </div>
            </Link>
            <Link to={""}>
                <div className={styles.sideItem}>
                    <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/null/external-account-taxes-flatart-icons-lineal-color-flatarticons-1.png" />
                    <p>Uploads</p>
                </div>
            </Link>
            <Link to={"files"}>
                <div className={styles.sideItem}>
                    <img src="/assets/icons/file_upload.png" alt="fileUploadImg" />
                    <p>Files</p>
                </div>
            </Link>
            <Link to={"notification"}>
                <div className={styles.sideItem}>
                    <img src="/assets/icons/bell.png" alt="fileUploadImg" />
                    <p>Notifications</p>
                </div>
            </Link>
            <Link to={"invite"}>
                <div className={styles.sideItem}>
                    <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/64/null/external-Add-email-bearicons-outline-color-bearicons.png" />
                    <p>Invite Friends</p>
                </div>
            </Link>
            <Link to={"settings"}>
                <div className={styles.sideItem}>
                    <img src="https://img.icons8.com/plasticine/100/null/gear.png" alt='settingImg' />
                    <p>Settings</p>
                </div>
            </Link>
            <Link to={"account"}>
                <div className={styles.sideItem}>
                    <img className={styles.sideItem_profileImg} src="https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/295566815_628925168949472_6493492915652486723_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=yLChwvTXUCkAX96wEKb&_nc_ht=scontent.fbwa1-1.fna&oh=00_AfCCnLGJW5foj37LVru9g_6gyYpXrXBwcB3Zae8dbYvydQ&oe=63EB4D55" alt="fileUploadImg" />
                    <p>Account</p>
                </div>
            </Link>

        </div>
    )
}

export default SideList