export function calculateDepartmentPoints(events){

  const table={};

  function add(dept,pts,type,event){
    if(!dept) return;

    if(!table[dept]){
      table[dept]={department:dept,points:0,details:[]};
    }

    table[dept].points+=Number(pts);

    table[dept].details.push({
      event,
      type,
      points:Number(pts)
    });
  }

  events.forEach(e=>{

    if(e.category!=="Sports") return;

    if(e.winner){
      add(e.winner, e.winnerPoints || 5, "Winner", e.title);
    }

    if(e.runner){
      add(e.runner, e.runnerPoints || 3, "Runner", e.title);
    }

  });

  return Object.values(table)
    .sort((a,b)=>b.points-a.points);
}
