
import { useNotification } from "web3uikit";
var globalDispatch;
export function NotificationFromWeb3UiKit() {

    globalDispatch = useNotification();

    // const handleNewNotification = (notifiactionType) => {
    //     globalDispatch({
    //         type: notifiactionType,
    //         message: 'Somebody messaged you',
    //         title: 'New Notification',
    //         position: 'topR',
    //     });
    // };


}

export function throwNotification(notificationType, messsage, title) {
    globalDispatch({
        type: notificationType,
        message: messsage,
        title: title,
        position: 'topR',
    });
}


