(function ($) {

/**
 * Provide the summary information for the menu attributes vertical tabs.
 */
Backdrop.behaviors.menuAttributesOptionsSummary = {
  attach: function (context) {
    // Menu item title.
    $('fieldset#edit-title', context).backdropSetSummary(function (context) {
      if (!$('input[type="checkbox"]:checked', context).val()) {
        return Backdrop.t('Disabled');
      }
      var value = $('.form-textarea', context).val();
      if (!value) {
        return Backdrop.t('No title');
      }
      else {
        return Backdrop.checkPlain(value);
      }
    });

    // Menu item ID.
    $('fieldset#edit-id', context).backdropSetSummary(function (context) {
      if (!$('input[type="checkbox"]:checked', context).val()) {
        return Backdrop.t('Disabled');
      }
      var value = $('.form-text', context).val();
      if (!value) {
        return Backdrop.t('No ID');
      }
      else {
        return Backdrop.checkPlain(value);
      }
    });

    // Menu item name.
    $('fieldset#edit-name', context).backdropSetSummary(function (context) {
      if (!$('input[type="checkbox"]:checked', context).val()) {
        return Backdrop.t('Disabled');
      }
      var value = $('.form-text', context).val();
      if (!value) {
        return Backdrop.t('No name');
      }
      else {
        return Backdrop.checkPlain(value);
      }
    });

    // Menu item relationship.
    $('fieldset#edit-rel', context).backdropSetSummary(function (context) {
      if (!$('input[type="checkbox"]:checked', context).val()) {
        return Backdrop.t('Disabled');
      }
      var value = $('.form-text', context).val();
      if (!value) {
        return Backdrop.t('No relationship');
      }
      else {
        return Backdrop.checkPlain(value);
      }
    });

    // Menu item classes.
    $('fieldset#edit-class', context).backdropSetSummary(function (context) {
      if (!$('input[type="checkbox"]:checked', context).val()) {
        return Backdrop.t('Disabled');
      }
      var value = $('.form-text', context).val();
      if (!value) {
        return Backdrop.t('No classes');
      }
      else {
        return Backdrop.checkPlain(value.replace(/\s/g, ', '));
      }
    });

    // Menu item style.
    $('fieldset#edit-style', context).backdropSetSummary(function (context) {
      if (!$('input[type="checkbox"]:checked', context).val()) {
        return Backdrop.t('Disabled');
      }
      var value = $('.form-text', context).val();
      if (!value) {
        return Backdrop.t('No style');
      }
      else {
        return Backdrop.checkPlain(value);
      }
    });

    // Menu item target.
    $('fieldset#edit-target', context).backdropSetSummary(function (context) {
      if (!$('input[type="checkbox"]:checked', context).val()) {
        return Backdrop.t('Disabled');
      }

      var value = $('.form-select option:selected', context).text();
      return Backdrop.checkPlain(value);
    });

    // Menu item access key.
    $('fieldset#edit-accesskey', context).backdropSetSummary(function (context) {
      if (!$('input[type="checkbox"]:checked', context).val()) {
        return Backdrop.t('Disabled');
      }
      var value = $('.form-text', context).val();
      if (!value) {
        return Backdrop.t('No access key');
      }
      else {
        return Backdrop.checkPlain(value);
      }
    });

  }
};

})(jQuery);
