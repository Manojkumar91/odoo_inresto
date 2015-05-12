openerp.inresto_home = function(instance, local) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

    local.HomePage = instance.Widget.extend({
		//template :"HomePageTemplate",
        start: function() {
			this.$el.append('<a href="/web#menu_id=320&action="><div class="inres_home_item_title"><b>Point of Sale</b></div></a>');
			this.$el.append('<a href="/web#menu_id=320&action="><div class="inres_home_item1"></div></a>');
			this.$el.append('<a href="/web#menu_id=335&action="><div class="inres_home_item_title"><b>Purchases</b></div></a>');
			this.$el.append('<a href="/web#menu_id=335&action="><div class="inres_home_item2"></div></a>');
        },
    });
	
	local.GreetingsWidget = instance.Widget.extend({
        start: function() {
            this.$el.append('<div><a href="/web#menu_id=320&action=">We are so happy to see you again in this menu!</div>');
        },
    });

   instance.web.client_actions.add('inrestohome.homepage', 'instance.inresto_home.HomePage');

}
