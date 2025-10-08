export const loadInstalled = () =>{
    const data = localStorage.getItem("installed");
    if(data){
        return JSON.parse(data);
    }
    else{
        return [];
    }
}
export const isInstalled = (app) =>{
    const installedApps = loadInstalled();
     const flag = installedApps.some(p => p.id === app.id );
     return flag;
}

export const setInstalledApps = (app) =>{
    const installedApps = loadInstalled();
    const isDuplicate = installedApps.some(p => p.id === app.id );
    if(isDuplicate){
        return alert("already added");
    }
    const updatedList = [...installedApps,app];
    localStorage.setItem("installed",JSON.stringify(updatedList));

}

