{
    'name' : 'InResto Home',
    'version': '1.0',
    'summary': 'inResto Home',
    'category': 'Tools',
    'description':
        """
InResto Home
=================
        """,
    'data': [
        "inrestohome.xml",
        "inrestohome_data.xml",
    ],
    'depends' : ['sale_stock', 'point_of_sale'],
    'qweb': ['static/src/xml/*.xml'],
    'application': True,
}
