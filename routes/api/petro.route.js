var express = require('express');
var controller = require('../../controllers/petro.controller');
var router = express.Router();

//UnlockUser
router.post('/getUserDetail', controller.getUserDetail);
router.post('/unlockUser', controller.unlockUser);
//CreditApproval
router.post('/getListCreditApproval', controller.getListCreditApproval);
router.post('/releaseVbeln', controller.releaseVbeln);
//OrderApproval
router.post('/getListOrderApproval', controller.getListOrderApproval);
router.post('/releaseEbeln', controller.releaseEbeln);
//PO CKG
router.post('/getPo', controller.getPo);
router.post('/createPo', controller.createPo);
router.post('/deletePo', controller.deletePo);
//NegataiveApproval
router.post('/getNegativeApproval', controller.getNegativeApproval);
router.post('/checkNegativeApproval', controller.checkNegativeApproval);
//Unlock Acounting
router.post('/getAcounting', controller.getAcounting);
router.post('/unlockAcounting', controller.unlockAcounting);
//UnlockWarehouse
router.post('/getWarehouse', controller.getWarehouse);
router.post('/unlockWarehouse', controller.unlockWarehouse);
//Quantity Revenue
router.post('/getQuantityRevenue', controller.getQuantityRevenue);
//chung
router.post('/checkLogin', controller.checkLogin);
router.post('/getCompanyCode', controller.getCompanyCode);
router.post('/getProductCode', controller.getProductCode);
router.post('/getPlantCode', controller.getPlantCode);
router.post('/getUser', controller.getUser);//user name login SAP

module.exports = router;