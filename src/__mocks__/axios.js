const defaultdata = {"cod":0,"entity":{"status":"success","country":"Argentina","countryCode":"AR","region":"B","regionName":"Buenos Aires","city":"Tablada","zip":"1766","lat":-34.7065,"lon":-58.5272,"timezone":"America/Argentina/Buenos_Aires","isp":"Telecentro S.A.","org":"Telecentro S.A. - Clientes Residenciales","as":"AS27747 Telecentro S.A.","query":"181.46.66.72"}};

export default {
    get: jest.fn(() => Promise.resolve({ data: defaultdata }))
};