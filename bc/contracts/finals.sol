// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract finals {
    address public manufacturer;
    address public distributor;
    address public retailer;
    struct Product {
        uint productId;
        string Location;
        address owner;
        string[] ownerHist;
    }
    struct DescM{
        uint pid;
        string CATRM;
        string DPMM;
        string DTQTMM;
        string DTPM;
        string DEM;
        string DTPMM;
        string TMTMM;
        string VHM;
        string ISOM;
        string FSSAIM;
    }
    struct DescD{
        uint pid;
        string DTMD;
        string QMRD;
        string DTPMD;
        string TMDD;
        string VHD;
    }
    struct DescS{
        uint pid;
        string DTRMS;
        string TMTRS;
        string TMTSS;
    }
    
    mapping(uint256 => Product) public products;
    mapping(uint256 => DescM) public descM;
    mapping(uint256 => DescD) public descD;
    mapping(uint256 => DescS) public descS;
    
    event ProductCreated(string description, uint256 productId, address manufacturer);
    
    constructor() {
        manufacturer=msg.sender;
    }
        modifier onlyManufacturer() {
        require(msg.sender == manufacturer, "Only the manufacturer can call this function.");
        _;
    }
    
    modifier onlyDistributor() {
        require(msg.sender == distributor, "Only the distributor can call this function.");
        _;
    }
    
    modifier onlyRetailer() {
        require(msg.sender == retailer, "Only the retailer can call this function.");
        _;
    }
    
    function setDistributor(address _distributor) external onlyManufacturer  {
        distributor = _distributor;
    }
    
    function setRetailer(address _retailer) external onlyDistributor  {
        retailer = _retailer;
    }
    
    function updateManufacturerVariables(string memory _CATRM,string memory _DPMM,string memory _DTQTMM,string memory _DTPM,string memory _DEM,string memory _DTPMM,string memory _TMTMM, 
     string memory _VHM,string memory _ISOM,string memory _FSSAIM, uint256 _productId) external onlyManufacturer {
        Product storage product = products[_productId];
        DescM storage description =descM[_productId];
        product.owner=msg.sender;
        product.Location="At Manufacture";
        product.productId=_productId;
        product.ownerHist.push("Manufacture");
        description.pid=_productId;
        description.CATRM=_CATRM;
        description.DPMM=_DPMM;
        description.DTQTMM=_DTQTMM;
        description.DTPM=_DTPM;
        description.DEM=_DEM;
        description.DTPMM=_DTPMM;
        description.TMTMM=_TMTMM;
        description.VHM=_VHM;
        description.ISOM=_ISOM;
        description.FSSAIM=_FSSAIM;

}
    
    function updateDistributorVariables(uint256 _pid,string memory _DTMD,string memory _QMRD,string memory _DTPMD,string memory _TMDD,string memory _VHD) external onlyDistributor  returns(string memory) {
        bool check=isProductPresent(_pid);
        if (check==true){
            Product storage product = products[_pid];
            DescD storage description=descD[_pid];
            product.owner=msg.sender;
            product.Location="At Distributor";
            product.productId=_pid;
            product.ownerHist.push("Distributor");
            description.DTMD=_DTMD;
            description.QMRD=_QMRD;
            description.DTPMD=_DTPMD;
            description.TMDD=_TMDD;
            description.VHD=_VHD;
            return "Update Succesful";
        }
        else{
            return "The product ID is invalid";
        }
    }
    
    function updateRetailerVariables(uint256 _pid,string memory _DTRMS,string memory _TMTRS,string memory _TMTSS) external onlyRetailer  returns (string memory) {
         bool check=isProductPresent(_pid);
        if (check==true){
            Product storage product = products[_pid];
            DescS storage description=descS[_pid];
            product.owner=msg.sender;
            product.Location="At Seller";
            product.productId=_pid;
            product.ownerHist.push("Seller");
            description.DTRMS=_DTRMS;
            description.TMTRS=_TMTRS;
            description.TMTSS=_TMTSS;
            return "Update Succesful";
        }
        else{
            return "The product ID is Invalid";
        }
    }
    
    function getprodmandet(uint256 _pid)external onlyManufacturer  view returns (DescM memory){
        require(products[_pid].productId != 0, "Product not found");
            DescM storage description=descM[_pid];
            return description;
        
    }
        function getproddistdet(uint256 _pid)external onlyDistributor view returns (DescD memory){
        require(products[_pid].productId != 0, "Product not found");
            DescD storage description=descD[_pid];
            return description;
        
    }
        function getprodseldet(uint256 _pid)external onlyRetailer  view returns (DescS memory){
        require(products[_pid].productId != 0, "Product not found");
            DescS storage description=descS[_pid];
            return description;
        
    }
    
    function getProductHistory(uint256 _productId) public view returns (string[] memory) {
        Product storage product = products[_productId];
        return product.ownerHist;
    }
    

     function getRole(address _address) private view returns (string memory) {
        if (_address == manufacturer) {
            return "manufacturer";
        } else if (_address == distributor) {
            return "distributor";
        } else if (_address == retailer) {
            return "retailer";
        } else {
            return "unknown";
        }
    }
    function isProductPresent(uint256 _productId) public view returns (bool) {
        return products[_productId].productId != 0;
    }
}
