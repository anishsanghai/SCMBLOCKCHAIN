import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BlockService {

  private web3js:any;
  private provider:any;
  private inst:any;
  private pid:any;
  private man:any;
  private dist:any;
  private ret:any;
  private contract:any;
  constructor() {
    this.provider=new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
    this.web3js=new Web3(this.provider);
    this.contract='0x803CEF93bB1e1069a841F665a22E37492aFA05f8'
    this.man='0x109f97C961a173E58F377c6B05c18e534552fA19'
    this.dist='0x9C58F0dFB499a644ACec475F76479Dc244051400'
    this.ret='0x1b1FC508885B9AC399725394D5CdC7F285ea9897'
    this.inst=new this.web3js.eth.Contract(environment.finalsabi,this.contract,{from:this.man,gas:'20000000000'});
    this.inst.methods.setDistributor(this.dist).send({from:this.man,gas:'1000000'}).then(()=>{
      console.log("distributed added succesfully");
    }).catch(()=>{
      console.log("Error occured while setting the distributor")
    })
    this.inst.methods.setRetailer(this.ret).send({from:this.dist,gas:'1000000'}).then(()=>{
      console.log("Seller added succesfully");
    }).catch(()=>{
      console.log("Error occured while setting the Seller")
    })
  }
 async manufacturer(a:any){
   await this.inst.methods.updateManufacturerVariables(a[4],a[7],a[6],a[9],a[10],a[11],a[12],a[13],a[14],a[15],parseInt(a[0])).send({from:this.man,gas:'1000000'}).then(()=>{
    console.log("Data is succesfuly added in the blockchain from manufactureur")
   }).catch(()=>{
    console.log("Data didnt get added to the blockchain from the manufacturer")
   })
  }
  updatepid(f:any){
    this.pid=parseInt(f);
  }
  async detMan(a:any){
    try{const b=await this.inst.methods.getprodmandet(a).call({from :this.man})
    console.log(b)}
    catch(err){
      console.error(err)
      console.log("Some error occured in detMan")
    }
    /*.then(()=>{
      console.log("Data is present")
    }).catch(()=>{
      console.log("Data is not present in the blockchain")
    })*/
    
  }
  async distributor(f:any){
   await this.inst.methods.updateDistributorVariables(this.pid,f[3],f[4],f[8],f[9],f[11]).send({from:this.dist,gas:'1000000'})
  }
  async retailer(f:any){
   await this.inst.methods.updateRetailerVariables(this.pid,f[3],f[2],f[9]).send({from:this.ret,gas:'1000000'})
  }
  async detdist(a:any){
    const b=await this.inst.methods.getproddistdet(a).call({from :this.dist})
    console.log(b)
  }
  async detret(a:any){
    const b=await this.inst.methods.getprodseldet(a).call({from :this.ret})
    console.log(b)
  }
}
