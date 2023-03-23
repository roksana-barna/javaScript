function paperRequirements(fbookQuantity,sbookQuantity,tbookQuantity){
    
    var fpage=100;
    var spage=200;
    var tpage=300;
    const fcopy=fpage*fbookQuantity;
    const scopy=spage*sbookQuantity;
    const tcopy=tpage*tbookQuantity;
  const total=fcopy+scopy+tcopy;
  return total;
}
const papers=paperRequirements(1,2,3);
console.log(papers);