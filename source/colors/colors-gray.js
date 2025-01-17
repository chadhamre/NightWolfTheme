const Color = require("color")
const colors = require("./common-colors")

colors.principal =            Color.rgb(33,37,43)
colors.principal_0 =          Color.rgb(41,45,51)
colors.principal_1 =          Color.rgb(51,55,61)
colors.principal_2 =          Color.rgb(65,69,75)
colors.principal_3 =          Color.rgb(85,89,95)
colors.principal_4 =          Color.rgb(113,117,123)
colors.principal_5 =          Color.rgb(151,155,161)

colors.text =                 Color.rgb(206,206,206)

colors.contrast =             Color.rgb(66,165,245)
colors.contrastLight =        Color.rgb(173,203,248)
colors.contrastDark =         Color.rgb(24,98,239)

colors.selection =            colors.principal_2
colors.selectionHighlight =   colors.principal_1
colors.selectionInactive =    colors.principal_2
colors.hoverHiglight =        colors.principal_1
colors.wordHighlightStrong =  colors.principal_1
colors.findMatch =            colors.principal_3
colors.findHighlight =        colors.principal_1
colors.rangeHiglight =        colors.principal_2
colors.lineHiglight =         colors.principal_0

colors.gitInsertedBg =        Color.rgb(5,20,5)
colors.gitRemovedBg =         Color.rgb(20,0,0)
colors.gitIgnoreExplorer =    Color.rgb(140,140,140)

//INTERFACE COLORS
colors.interBackground =      colors.principal
colors.interBorder =          colors.principal_1
colors.notificationBadge =    colors.white

// SYNTAX COLORS
colors.variable =             colors.syntaxYellow
colors.variableProperty =     colors.text
colors.contrastText =         colors.syntaxRed
colors.variableInstance =     colors.syntaxOrange
colors.specialWordA =         colors.syntaxBlue
colors.specialWordB =         colors.syntaxViolet
colors.specialWordC =         colors.syntaxPurple
colors.functionName =         colors.syntaxCyan
colors.string =               colors.syntaxGreen
colors.operator =             colors.contrastText
colors.regularText =          colors.text
colors.number =               colors.syntaxOrange
colors.boolean =              colors.contrastText
colors.nullUnd =              colors.contrastText
colors.punctuation =          colors.regularText
colors.deprecated =           colors.danger
colors.comment =              Color.rgb(100,120,130)

// Markup
colors.htmlTag =              colors.contrastText
colors.metaTag =              colors.text
colors.tagAttribute =         colors.specialWordB
colors.pugClass =             colors.variable

// Stylesheets
colors.cssAttribute =         colors.syntaxGreen
colors.cssValue =             colors.syntaxOrange
colors.cssTag =               colors.syntaxRed
colors.cssClass =             colors.syntaxYellow
colors.cssId =                colors.syntaxBlue
colors.cssProperty =          colors.syntaxCyan
colors.cssUnits =             colors.number
colors.cssSpecialWord =       colors.syntaxViolet
colors.cssPseudoClass =       colors.syntaxPurple
colors.sassFunction =         colors.syntaxBlue
colors.sassInterpolation =    colors.syntaxRed

module.exports = colors