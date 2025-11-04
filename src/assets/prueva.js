function isVlid(username, password){
    let res = false;
    const data = [{
        username: "admin", password :""
    }, {username: "user", password :"qweasd"}]
    for (let i=0; i<data.length; i++){
        if (username==data[i].username && password==data[i].password)
        {
         return res = true;
        }
        }
        return res;
    }
    

console.log(isVlid("user", "qweasd"))