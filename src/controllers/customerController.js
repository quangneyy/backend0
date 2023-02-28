const { uploadSingleFile } = require("../services/fileService");
const {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomerService,
  putUpdateCustomerService,
  deleteACustomerService,
  deleteArrayCustomerService,
} = require("../services/customerService");
const Joi = require("joi");

// {key: value}
module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, address, phone, email, image, description } = req.body;

    const schema = Joi.object({
      name: Joi.string().alphanum().min(3).max(30).required(),
      address: Joi.string(),
      phone: Joi.string().pattern(new RegExp("^[0-9]{8,11}$")),
      email: Joi.string().email(),
      description: Joi.string(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      // return error
      return res.status(200).json({
        msg: error,
      });
    } else {
      let imageUrl = "";

      if (!req.files || Object.keys(req.files).length === 0) {
        // do nothing
      } else {
        let result = await uploadSingleFile(req.files.image);
        imageUrl = result.path;
      }

      let customerData = {
        name,
        address,
        phone,
        email,
        description,
        image: imageUrl,
      };
      let customer = await createCustomerService(customerData);

      return res.status(200).json({
        EC: 0,
        data: customer,
      });
    }
  },

  postCreateArrayCustomer: async (req, res) => {
    let customers = await createArrayCustomerService(req.body.customers);
    if (customers) {
      return res.status(200).json({
        EC: 0,
        data: customers,
      });
    } else {
      return res.status(200).json({
        EC: -1,
        data: customers,
      });
    }
  },

  getAllCustomers: async (req, res) => {
    let limit = req.query.limit;
    let page = req.query.page;
    let name = req.query.name;
    let result = null;

    if (limit && page) {
      result = await getAllCustomerService(limit, page, name, req.query);
    } else {
      result = await getAllCustomerService();
    }
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  putUpdateCustomers: async (req, res) => {
    let { id, name, email, address } = req.body;
    let result = await putUpdateCustomerService(id, name, email, address);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  deleteACustomer: async (req, res) => {
    let id = req.body.id;

    let result = await deleteACustomerService(id);

    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  deleteArrayCustomer: async (req, res) => {
    let ids = req.body.customerId;
    console.log(">>> check ids: ", ids);
    let result = await deleteArrayCustomerService(ids);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
