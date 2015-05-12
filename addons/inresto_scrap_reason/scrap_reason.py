# -*- coding: utf-8 -*-
 
from openerp.osv import fields, osv
 
class scrap_reason_capture(osv.Model):
    _inherit = "stock.move.scrap" #model name for which we want to add a field
 
    _columns = {
        "x_scrap_reason": fields.char('Reason', size=128, required=True) #field name and properties to add to DB
    }
 
    _defaults = {
        "x_scrap_reason": ""
    }
 
scrap_reason_capture()