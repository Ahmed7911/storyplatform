import React,{useEffect , useState,useMemo} from "react";

export default function NotificationBell ({notificatBell = 0}){
    const [pageJustLoaded , setPageJuatLoaded] = useState(true);
    notificatBell = 10;
    useEffect(()=>{
        const t = setTimeout(()=>
            setPageJuatLoaded(false),0);
            return()=> clearTimeout(t);
        },[]);
        const bellSrc = useMemo(()=>{
            if(pageJustLoaded) return "./assets/images/ringing-bell.png";
            if(Number(notificatBell)===0) return "./assets/images/empty-bell.png" ;
            return "./assets/images/notifing-bell.png";
        }, [pageJustLoaded,notificatBell]);
        const bellAlt = useMemo(()=>{
            if(pageJustLoaded) return "Ringing bell (Loading...)";
            if(Number(notificatBell===0)) return "Empty bell(no notifications...x)";
            return"notifying bell ( new notifications)"
        },[pageJustLoaded , notificatBell]);
        return(
            <div className="notificationImage" aria-label="Notifications">
                <img 
                    src={bellSrc}
                    alt={bellAlt}
                    loading="lazy"
                    width={36}
                    height={36}
                    />
            </div>
        );
        }
        
    
