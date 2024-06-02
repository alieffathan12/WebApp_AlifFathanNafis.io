// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["esri/units","dojo/_base/array"],function(b,h){var e={testTimeUnits:function(c){return"Hours"===c||"Seconds"===c||"Minutes"===c}},a={};a[b.FEET]=.3048;a[b.YARDS]=.9144;a[b.METERS]=1;a[b.KILOMETERS]=1E3;a[b.MILES]=1609.3472186944373;a[b.NAUTICAL_MILES]=1852;a.Hours=6E4;a.Seconds=16.66666666666667;a.Minutes=1E3;a[b.SQUARE_FEET]=a[b.FEET]*a[b.FEET];a[b.SQUARE_YARDS]=a[b.YARDS]*a[b.YARDS];a[b.SQUARE_METERS]=1;a[b.SQUARE_KILOMETERS]=a[b.KILOMETERS]*a[b.KILOMETERS];a[b.SQUARE_MILES]=a[b.MILES]*
a[b.MILES];a[b.ACRES]=4046.8564224;a[b.HECTARES]=1E4;e.convertUnits=function(c,f,d){return c*(a[f]||0)/(d&&a[d]||1)};e.getMaxRadiusInKilometers=function(c,f){var d=0;c&&c.bufferRadii&&(h.forEach(c.bufferRadii,function(g){g>d&&(d=g)}),d=e.convertUnits(d,c.bufferUnits||b.MILES,b.KILOMETERS),f&&e.testTimeUnits(c.bufferUnits)&&(d/=12));return d};return e});