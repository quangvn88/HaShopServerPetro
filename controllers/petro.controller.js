const urlServer = require('../urlApi');
const axios = require('axios');

module.exports.getCompanyCode = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;

  let urlApi = '/ZFM_COMPANY_CODE';
  let url = urlServer + urlApi;

  let query = req.query.queryStr;
  axios({
    method: 'get',
    url,
    auth: {
      username: username,
      password: pass
    }
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      //console.log(error);
      res.send(JSON.stringify(error));
    });
};

module.exports.checkLogin = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;
  console.log(username);
  console.log(pass);

  let urlApi = '/ZFM_LOGIN_APP';
  let url = urlServer + urlApi;

  let query = req.query.queryStr;
  axios({
    method: 'post',
    url,
    auth: {
      username: username,
      password: pass
    },
    data: {
      USERNAME: username,
      PASSWORD: pass
    }
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      //console.log(error);
      res.send(JSON.stringify(error));
    });
};

module.exports.getUser = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;

  let urlApi = '/ZFM_USER_NAME';
  let url = urlServer + urlApi;

  let query = req.query.queryStr;
  axios({
    method: 'get',
    url,
    auth: {
      username: username,
      password: pass
    }
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      res.send(JSON.stringify(error));
    })
}

module.exports.getUserDetail = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;

  let user = req.body.user;
  user = user.toUpperCase();

  let urlApi = '/ZFM_DISPLAY_UNLOCK';
  let url = urlServer + urlApi;
  let query = req.query.queryStr;

  axios({
    method: 'get',
    url,
    auth: {
      username: username,
      password: pass
    },
    data: {
      USERNAME: user
    }
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      res.send(JSON.stringify(error));
    })
}

module.exports.unlockUser = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;

  let user = req.body.user;
  user = user.toUpperCase();

  let urlApi = '/ZFM_UNLOCK_USER';
  let url = urlServer + urlApi;
  let query = req.query.queryStr;

  axios({
    method: 'get',
    url,
    auth: {
      username: username,
      password: pass
    },
    data: {
      USERNAME: user
    }
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      res.send(JSON.stringify(error));
    })
}

module.exports.getListCreditApproval = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;

  let frombukrs = req.body.frombukrs;
  let tobukrs = req.body.tobukrs;
  let todate = req.body.todate;
  let fromdate = req.body.fromdate;
  let vbeln = req.body.vbeln;
  //user = user.toUpperCase();
  let urlApi = '/ZFM_PHEDUYET_TINDUNG';
  let url = urlServer + urlApi;
  let query = req.query.queryStr;

  axios({
    method: 'get',
    url,
    auth: {
      username: username,
      password: pass
    },
    data: {
      FROMBUKRS: frombukrs,
      TOBUKRS: tobukrs,
      DOCDATE1: fromdate,
      DOCDATE2: todate,
      LENHXUAT: vbeln
    }
  })
    .then(function (response) {
      //console.log(response.data);
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      //console.log(error);
      res.send(JSON.stringify(error));
    })
}
module.exports.releaseVbeln = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;

  let vbeln = req.body.vbeln;
  let urlApi = '/ZFM_RELEASE_LENHXUAT';
  let url = urlServer + urlApi;
  let query = req.query.queryStr;

  axios({
    method: 'get',
    url,
    auth: {
      username: username,
      password: pass
    },
    data: {
      LENHXUAT: vbeln
    }
  })
    .then(function (response) {
      //console.log(response.data);
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      //console.log(error);
      res.send(JSON.stringify(error));
    })
}

module.exports.getListOrderApproval = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;

  let frombukrs = req.body.frombukrs;
  let tobukrs = req.body.tobukrs;
  let todate = req.body.todate;
  let fromdate = req.body.fromdate;
  let ebeln = req.body.ebeln;
  //user = user.toUpperCase();
  let urlApi = '/ZFM_LIST_DONHANG';
  let url = urlServer + urlApi;
  let query = req.query.queryStr;

  axios({
    method: 'get',
    url,
    auth: {
      username: username,
      password: pass
    },
    data: {
      FROMBUKRS: frombukrs,
      TOBUKRS: tobukrs,
      FROMBEDAT: fromdate,
      TOBEDAT: todate,
      EBELN: ebeln
    }
  })
    .then(function (response) {
      //console.log(response.data);
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      //console.log(error);
      res.send(JSON.stringify(error));
    })
}

module.exports.releaseEbeln = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;

  let ebeln = req.body.ebeln;
  let urlApi = '/ZFM_RELEASE_DONHANG';
  let url = urlServer + urlApi;
  let query = req.query.queryStr;

  axios({
    method: 'get',
    url,
    auth: {
      username: username,
      password: pass
    },
    data: {
      EBELN: ebeln
    }
  })
    .then(function (response) {
      //console.log(response.data);
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      //console.log(error);
      res.send(JSON.stringify(error));
    })
}

//Phe duyet don hang, Phe duyet tin dung, Unlock user -- DONE
module.exports.getProductCode = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;

  let urlApi = '/ZFM_PRODUCT_CODE';
  let url = urlServer + urlApi;

  let query = req.query.queryStr;
  axios({
    method: 'get',
    url,
    auth: {
      username: username,
      password: pass
    }
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      //console.log(error);
      res.send(JSON.stringify(error));
    });
};

module.exports.getPlantCode = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;

  let urlApi = '/ZFM_PLANT_CODE';
  let url = urlServer + urlApi;

  let query = req.query.queryStr;
  axios({
    method: 'get',
    url,
    auth: {
      username: username,
      password: pass
    }
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      //console.log(error);
      res.send(JSON.stringify(error));
    });
};

module.exports.getNegativeApproval = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;

  let matnr = req.body.matnr;
  let werks = req.body.werks;

  let urlApi = '/ZFM_XUATAM';
  let url = urlServer + urlApi;

  let query = req.query.queryStr;
  axios({
    method: 'get',
    url,
    auth: {
      username: username,
      password: pass
    },
    data: {
      MATNR: matnr,
      WERKS: werks
    }
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      //console.log(error);
      res.send(JSON.stringify(error));
    });
};

module.exports.checkNegativeApproval = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;

  let matnr = req.body.matnr;
  let werks = req.body.werks;
  let xmcng = req.body.xmcng;

  let urlApi = '/ZFM_XUATAM_CHECK';
  let url = urlServer + urlApi;

  let query = req.query.queryStr;
  axios({
    method: 'get',
    url,
    auth: {
      username: username,
      password: pass
    },
    data: {
      MATNR: matnr,
      WERKS: werks,
      XMCNG: xmcng
    }
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      //console.log(error);
      res.send(JSON.stringify(error));
    });
};

module.exports.getPo = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;

  let gjahr = req.body.gjahr;
  let month = req.body.month;

  let urlApi = '/ZFM_CKG';
  let url = urlServer + urlApi;

  let query = req.query.queryStr;
  axios({
    method: 'get',
    url,
    auth: {
      username: username,
      password: pass
    },
    data: {
      GJAHR: gjahr,
      MONTH: month,
    }
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      //console.log(error);
      res.send(JSON.stringify(error));
    });
};

module.exports.createPo = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;

  let bedat = req.body.bedat;
  let timef = req.body.timef;
  let period = req.body.period;

  let urlApi = '/ZFM_CKG_APPEND';
  let url = urlServer + urlApi;

  let query = req.query.queryStr;
  axios({
    method: 'get',
    url,
    auth: {
      username: username,
      password: pass
    },
    data: {
      BEDAT: bedat,
      TIME_F: timef,
      PERIOD_NO: period
    }
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      //console.log(error);
      res.send(JSON.stringify(error));
    });
};

module.exports.deletePo = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;

  let bedat = req.body.bedat;
  let timef = req.body.timef;

  let urlApi = '/ZFM_CKG_DELETE';
  let url = urlServer + urlApi;

  let query = req.query.queryStr;
  axios({
    method: 'get',
    url,
    auth: {
      username: username,
      password: pass
    },
    data: {
      BEDAT: bedat,
      TIME_F: timef,
    }
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      //console.log(error);
      res.send(JSON.stringify(error));
    });
};

module.exports.getAcounting = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;

  let bukrs = req.body.bukrs;

  let urlApi = '/ZFM_ACOUNTING';
  let url = urlServer + urlApi;

  let query = req.query.queryStr;
  axios({
    method: 'get',
    url,
    auth: {
      username: username,
      password: pass
    },
    data: {
      I_BUKRS: bukrs,
    }
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      //console.log(error);
      res.send(JSON.stringify(error));
    });
};
module.exports.unlockAcounting = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;

  let bukrs = req.body.bukrs;
  let fromperiod = req.body.fromperiod;
  let toperiod = req.body.toperiod;
  let fromyear = req.body.fromyear;
  let toyear = req.body.toyear;

  let urlApi = '/ZFM_UNLOCK_ACOUNTING';
  let url = urlServer + urlApi;

  let query = req.query.queryStr;
  axios({
    method: 'get',
    url,
    auth: {
      username: username,
      password: pass
    },
    data: {
      I_BUKRS: bukrs,
      I_FPERIOD: fromperiod,
      I_TPERIOD: toperiod,
      I_FYEAR: fromyear,
      I_TYEAR: toyear,
    }
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      //console.log(error);
      res.send(JSON.stringify(error));
    });
};

module.exports.getWarehouse = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;

  let bukrs = req.body.bukrs;

  let urlApi = '/ZFM_PLANT';
  let url = urlServer + urlApi;

  let query = req.query.queryStr;
  axios({
    method: 'get',
    url,
    auth: {
      username: username,
      password: pass
    },
    data: {
      I_BUKRS: bukrs,
    }
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      //console.log(error);
      res.send(JSON.stringify(error));
    });
};

module.exports.unlockWarehouse = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;

  let bukrs = req.body.bukrs;
  let period = req.body.period;
  let year = req.body.year;
  // radio box
  let xcomp = req.body.xcomp;
  let xinco = req.body.xinco;
  let xmove = req.body.xmove;
  // checkbox
  let xnegq = req.body.xnegq;
  let xnegv = req.body.xnegv;

  let urlApi = '/ZFM_MMPV?';
  let url = urlServer + urlApi;

  let query = req.query.queryStr;
  axios({
    method: 'get',
    url,
    auth: {
      username: username,
      password: pass
    },
    data: {
      I_BUKRS: bukrs,
      I_PERIOD: period,
      I_YEAR: year,
      I_XCOMP: xcomp,
      I_XINCO: xinco,
      I_XMOVE: xmove,
      I_XNEGQ: xnegq,
      I_XNEGV: xnegv,
    }
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      //console.log(error);
      res.send(JSON.stringify(error));
    });
};

module.exports.getQuantityRevenue = function (req, res) {
  let username = req.body.username;
  let pass = req.body.pass;

  let frombukrs = req.body.frombukrs;
  let tobukrs = req.body.tobukrs;
  let fromdate = req.body.fromdate;
  let todate = req.body.todate;
  let fromitem = req.body.fromitem;
  let toitem = req.body.toitem;


  let urlApi = '/ZFM_SANLUONG?';
  let url = urlServer + urlApi;

  let query = req.query.queryStr;
  axios({
    method: 'get',
    url,
    auth: {
      username: username,
      password: pass
    },
    data: {
      FROMBUKRS: frombukrs,
      TOBUKRS: tobukrs,
      FROMFKDAT: fromdate,
      TOFKDAT: todate,
      FROMMATNR: fromitem,
      TOMATNR: toitem,
    }
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      //console.log(error);
      res.send(JSON.stringify(error));
    });
};






