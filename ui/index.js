const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            show: {
                notify: true,
            },
            notifications: [],
            time: 10,
        };
    },
    methods: {
        message_handler(event) {
            switch (event.data.action) {
                case 'open_notify':
                    this.add_notify(event.data.type, event.data.title, event.data.message, event.data.time / 1000);
                    break;
                default:
                    break;
            };
        },
        add_notify(type, title, message, time) {
            const notification = {
                id: Date.now(),
                type,
                title,
                message,
                time: time || 3,
                isAnim: false,
            };
      
            this.notifications.push(notification);
            this.show.notify = true;

            this.updateNotification(notification.id)
            

            setTimeout(() => {
              this.remove_notify(notification.id);
            }, notification.time * 1000 + 400);
        },
        remove_notify(id) {
            this.notifications = this.notifications.filter((notif) => notif.id !== id);
            if (this.notifications.length === 0) {
                this.show.notify = false;
            }
        },
        getIcon(type) {
            switch (type) {
            case "success":
                return "./assets/image/success.png";
            case "error":
                return "./assets/image/error.png";
            case "warning":
                return "./assets/image/warning.png";
            case "primary":
                return "./assets/image/info.png";
            default:
                break;
            }
        },
        getColor(type) {
            switch (type) {
            case "success":
                return "#64EE3A";
            case "error":
                return "#FC5656";
            case "warning":
                return "#FFF500";
            case "primary":
                return "#3AE2EE";
            default:
                break;
            }
        },
        updateNotification(id) {

            setTimeout(() => {
                const notification = this.notifications.find(n => n.id === id);
                if (notification) {
                notification.isAnim = true;  // Vue bunu otomatik olarak izler ve DOM'u günceller
                }
            }, 100)
        }
    },
    computed: {},
    mounted() {
        window.addEventListener("message", this.message_handler);
        window.addEventListener("keyup", this.key_handler);
    },
    beforeDestroy() {
        window.removeEventListener("message", this.message_handler);
        window.removeEventListener("keyup", this.key_handler);
    },
});


app.mount("#app");

var resourceName = "88studio-notify";

if (window.GetParentResourceName) {
    resourceName = window.GetParentResourceName();
}

window.postNUI = async (name, data) => {
    try {
        const response = await fetch(`https://${resourceName}/${name}`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            return null;
        }

        const responseData = await response.json();
        return responseData;

    } catch (error) {
        return null;
    }
};
