const ids = ["one","two","three"];
const appendedChilds = [];

document.addEventListener("click", (event)=>{
    const X = event.clientX;
    const Y = event.clientY;
    const random = Math.random();
    const radius = random*100;
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.width = `${radius*2}px`;
    circle.style.height = `${radius*2}px`;
    circle.style.left = `${X-radius}px`;
    circle.style.top = `${Y-radius}px`;

    for(let id of ids){
        if(!(appendedChilds.includes(id))){
            circle.id = id;
            appendedChilds.push(id);
            break;
        }
    }
    document.body.appendChild(circle);

    if(appendedChilds.length > 2){
        const childId = appendedChilds.shift();
        document.body.removeChild(document.getElementById(childId));
    }

    if(appendedChilds.length>1){
        const firstChild = document.getElementById(appendedChilds[0]);
        if(firstChild){
            const firstChildRadius = parseFloat((firstChild.style.width).replace("px", ""))/2;
            const firstChildX = firstChild.offsetLeft + firstChildRadius;
            const firstChildY = firstChild.offsetTop + firstChildRadius;
            const dX = firstChildX - X;
            const dY = firstChildY - Y;
            const distance = Math.sqrt(dX * dX + dY * dY);
            const max = Math.max(firstChildRadius, radius)
            const min = Math.min(firstChildRadius, radius)
            const intersecting = (firstChildRadius + radius > distance) && (distance + min > max);
            console.log(intersecting?"Intersecting": "Not Intersecting")    
                        
        }
    }
})

