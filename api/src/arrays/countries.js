const x="Faroe Islands,Kiribati,Myanmar,Switzerland,Tuvalu,Western Sahara,United Kingdom,Tokelau,Greenland,Guinea-Bissau,Burundi,Northern Mariana Islands,Taiwan,Bangladesh,Jamaica,Bulgaria,British Virgin Islands,Guadeloupe,Bulgaria,Afghanistan,Indonesia,Ecuador,Niger,Korea,Palau,Kuwait,Denmark,Bouvet Island (Bouvetoya),Samoa,Northern Mariana Islands,Papua New Guinea,Norway,Aruba,Saint Barthelemy,Estonia,Korea,Brunei Darussalam,Palau,Barbados,Tuvalu,Cocos (Keeling) Islands,Netherlands Antilles,Belize,Mauritius,Swaziland,India,Angola,Togo,Syrian Arab Republic,Thailand,Malta,Jamaica,Kenya,Libyan Arab Jamahiriya,Kazakhstan,Saudi Arabia,Portugal,Korea,Uzbekistan,India,Australia,Lebanon,Cape Verde,Svalbard & Jan Mayen Islands,Kyrgyz Republic,Antarctica (the territory South of 60 deg S),Guatemala,Bouvet Island (Bouvetoya),Suriname,New Caledonia,United States Minor Outlying Islands,Iceland,Guam,United States of America,Jersey,Korea,Palestinian Territory,Saudi Arabia,Myanmar,Spain,Romania,Macedonia,Burundi,Iran,Estonia,Haiti,Gambia,Netherlands,Norfolk Island,El Salvador,Lithuania,Serbia,Switzerland,Qatar,Mongolia,Singapore,Mongolia,Lao People's Democratic Republic,Mozambique,Costa Rica,Azerbaijan,Philippines,Palau,Cuba,Latvia,Cuba,Uganda,Bosnia and Herzegovina,Iraq,Timor-Leste,Solomon Islands,Rwanda,Kuwait,Western Sahara,United Arab Emirates,Trinidad and Tobago,Bosnia and Herzegovina,Iceland,French Guiana,Marshall Islands,Tonga,Indonesia,Montserrat,Sudan,Sierra Leone,Brunei Darussalam,South Africa,Reunion,Mayotte,Palau,Cayman Islands,Thailand,Czech Republic,Djibouti,Belgium,Indonesia,Dominica,Niue,Finland,Nicaragua,Portugal,Australia,Albania,Estonia,Ecuador,Vietnam,New Caledonia,Canada,Korea,Congo,Netherlands,Dominica,Eritrea,New Zealand,Pitcairn Islands,Lesotho,Saint Kitts and Nevis,United Kingdom,Suriname,Dominican Republic,United States Virgin Islands,Mexico,Korea,Jamaica,Micronesia,Korea,French Southern Territories,Dominica,Philippines,Maldives,Guinea,United States Virgin Islands,Israel,Kenya,Syrian Arab Republic,China,Somalia,Cape Verde,Niue,Ireland,American Samoa,Saint Barthelemy,Anguilla,Canada,Monaco,Samoa,China,Montenegro,India,Niger,Zambia,Montenegro,Croatia,Guam,Isle of Man,Benin,Brazil,Egypt,Equatorial Guinea,Ukraine,Chad,Aruba,Niger,Bahrain,El Salvador,Cote d'Ivoire,Croatia,Turkmenistan,Ghana,Bulgaria,Oman,Russian Federation,Costa Rica,Niue,Estonia,Iran,Cote d'Ivoire,France,Spain,United States Virgin Islands,Sudan,Switzerland,Nauru,Tajikistan,Swaziland,Mexico,Bolivia,France,Greenland,Greece,United States of America,Japan,Cyprus,Japan,Mali,Czech Republic,Guernsey,Guernsey,Sierra Leone,United Arab Emirates,Ethiopia,Bangladesh,Tanzania,Armenia,British Virgin Islands,Netherlands Antilles,Philippines,Slovenia,Myanmar,United States Virgin Islands,France,Bolivia,Taiwan,Cuba,Kazakhstan,Chad,South Africa,Saudi Arabia,Ireland,Vietnam,Liberia,Ghana,Uzbekistan,Guatemala,Sudan,Nepal,Hong Kong,Eritrea,Uzbekistan,Guinea,Montserrat,Turks and Caicos Islands,Heard Island and McDonald Islands,Maldives,Antarctica (the territory South of 60 deg S),Ecuador,Kazakhstan,Ethiopia,Philippines,Eritrea,Croatia,United States Virgin Islands,Singapore,Sri Lanka,Vietnam,Saint Pierre and Miquelon,France,Zimbabwe,Korea,Mauritania,Nauru,Puerto Rico,Serbia,Iraq,Indonesia,Malawi,Ukraine,Nepal,Rwanda,Tajikistan,Rwanda,Poland,Christmas Island,Niger,Sweden,Ethiopia,Congo,Macao,Samoa,Canada,Belarus,Cook Islands,Haiti,Romania,Bolivia,Belgium,Barbados,Paraguay,Hong Kong,Turkmenistan,Turkey,Argentina,Sweden,Cape Verde,Oman,Bermuda,El Salvador,British Indian Ocean Territory (Chagos Archipelago),Egypt,Mexico,Ireland,Comoros,Austria,Suriname,South Georgia and the South Sandwich Islands,Mexico,Denmark,Hong Kong,Pitcairn Islands,San Marino,Malta,Bahamas,Argentina,Ethiopia,Aruba,New Zealand,Bermuda,Gibraltar,Burkina Faso,Jersey,Christmas Island,Maldives,Kuwait,Saint Vincent and the Grenadines,Kuwait,Saint Vincent and the Grenadines,China,Seychelles,New Zealand,Sweden,Samoa,Palau,Turkmenistan,Monaco,Samoa,Montserrat,Macedonia,Maldives,Israel,Poland,Saudi Arabia,Saint Barthelemy,Saint Pierre and Miquelon,Liechtenstein,Canada,Canada,Saint Helena,Brunei Darussalam,Barbados,Guernsey,Liberia,Congo,Tunisia,Comoros,Saint Lucia,Indonesia,India,Uruguay,Somalia,Taiwan,Aruba,Timor-Leste,Guatemala,Afghanistan,Palau,Cote d'Ivoire,Slovakia (Slovak Republic),Burkina Faso,Uzbekistan,Belgium,Saint Barthelemy,Bhutan,Estonia,Kenya,Uganda,Iran,French Southern Territories,Egypt,Ecuador,Hungary,Slovakia (Slovak Republic),Cambodia,Botswana,Slovenia,Samoa,Israel,Bhutan,Czech Republic,Puerto Rico,French Guiana,Qatar,Grenada,Vanuatu,Suriname,Saint Helena,San Marino,Comoros,Cyprus,Guyana,Guyana,Brazil,Tanzania,Antigua and Barbuda,Slovakia (Slovak Republic),Italy,Cote d'Ivoire,Isle of Man,Norway,Central African Republic,Greenland,South Georgia and the South Sandwich Islands,Djibouti,Montenegro,Croatia,Bahrain,Kuwait,Cuba,South Africa,United States of America,Gabon,Guyana,Eritrea,Cayman Islands,Austria,French Guiana,Togo,Brunei Darussalam,Greenland,Tajikistan,Uzbekistan,Hong Kong,Jersey,Mongolia,United States Minor Outlying Islands,Maldives,Jordan,Wallis and Futuna,Cambodia,Moldova,Suriname,Andorra,Bosnia and Herzegovina,Sri Lanka,Mauritius,Zimbabwe,Nauru,Honduras,Turkmenistan,Mexico,Niger,Oman,Pitcairn Islands,Papua New Guinea,Albania,Cayman Islands,Austria,Cote d'Ivoire,Trinidad and Tobago,Togo,Oman,Tokelau,Maldives,Bulgaria,Ukraine,Bangladesh,Antigua and Barbuda,Guinea-Bissau,Bahamas,Saint Pierre and Miquelon,Aruba"
const response=[]
x.split(',').forEach(element => {
    if(element){
        response.push({name:element})
    }
});
module.exports={
    response
}