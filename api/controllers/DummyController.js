/**
 * DummyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: async function(_req, res) {
    console.log('creating dummy');
    try {
        await Dummy.create({list: ['foo']});
        return res.ok();
    } catch (err) {
        console.log(err);
        return res.serverError(err);
    }
  },

};

