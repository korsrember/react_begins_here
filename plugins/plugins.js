'use strict';

// builtin presets
exports['preset-default'] = require('./preset-default.js');

// builtin plugins
exports.addAttributesToSVGElement = require('./addAttributesToSVGElement.js');
exports.addClassesToSVGElement = require('./addClassesToSVGElement.js');
exports.cleanupAttrs = require('./cleanupAttrs.js');
exports.cleanupEnableBackground = require('./cleanupEnableBackground.js');
exports.cleanupIDs = require('./cleanupIDs.js');
exports.cleanupListOfValues = require('./cleanupListOfValues.js');
exports.cleanupNumericValues = require('./cleanupNumericValues.js');
exports.collapseGroups = require('./collapseGroups.js');
exports.convertColors = require('./convertColors.js');
exports.convertEllipseToCircle = require('./convertEllipseToCircle.js');
exports.convertPathData = require('./convertPathData.js');
exports.convertShapeToPath = require('./convertShapeToPath.js');
exports.convertStyleToAttrs = require('./convertStyleToAttrs.js');
exports.convertTransform = require('./convertTransform.js');
exports.mergeStyles = require('./mergeStyles.js');
exports.inlineStyles = require('./inlineStyles.js');
exports.mergePaths = require('./mergePaths.js');
exports.minifyStyles = require('./minifyStyles.js');
exports.moveElemsAttrsToGroup = require('./moveElemsAttrsToGroup.js');
exports.moveGroupAttrsToElems = require('./moveGroupAttrsToElems.js');
exports.prefixIds = require('./prefixIds.js');
exports.removeAttributesBySelector = require('./removeAttributesBySelector.js');
exports.removeAttrs = require('./removeAttrs.js');
exports.removeComments = require('./removeComments.js');
exports.removeDesc = require('./removeDesc.js');
exports.removeDimensions = require('./removeDimensions.js');
exports.removeDoctype = require('./removeDoctype.js');
exports.removeEditorsNSData = require('./removeEditorsNSData.js');
exports.removeElementsByAttr = require('./removeElementsByAttr.js');
exports.removeEmptyAttrs = require('./removeEmptyAttrs.js');
exports.removeEmptyContainers = require('./removeEmptyContainers.js');
exports.removeEmptyText = require('./removeEmptyText.js');
exports.removeHiddenElems = require('./removeHiddenElems.js');
exports.removeMetadata = require('./removeMetadata.js');
exports.removeNonInheritableGroupAttrs = require('./removeNonInheritableGroupAttrs.js');
exports.removeOffCanvasPaths = require('./removeOffCanvasPaths.js');
exports.removeRasterImages = require('./removeRasterImages.js');
exports.removeScriptElement = require('./removeScriptElement.js');
exports.removeStyleElement = require('./removeStyleElement.js');
exports.removeTitle = require('./removeTitle.js');
exports.removeUnknownsAndDefaults = require('./removeUnknownsAndDefaults.js');
exports.removeUnusedNS = require('./removeUnusedNS.js');
exports.removeUselessDefs = require('./removeUselessDefs.js');
exports.removeUselessStrokeAndFill = require('./removeUselessStrokeAndFill.js');
exports.removeViewBox = require('./removeViewBox.js');
exports.removeXMLNS = require('./removeXMLNS.js');
exports.removeXMLProcInst = require('./removeXMLProcInst.js');
exports.reusePaths = require('./reusePaths.js');
exports.sortAttrs = require('./sortAttrs.js');
exports.sortDefsChildren = require('./sortDefsChildren.js');
