
export default function tokenCookie(name){
        let value = ";"+document.cookie;
        let parts = value.split(";" + name + "=");
        return parts.pop().split(";").shift();
}
