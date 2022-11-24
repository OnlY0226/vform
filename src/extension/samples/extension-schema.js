export const cardSchema = {
  type: 'card',
  category: 'container',
  icon: 'card',
  widgetList: [],
  options: {
    name: '',
    label: 'card',
    hidden: false,
    folded: false,
    showFold: true,
    cardWidth: '100%',
    shadow: 'never',
    customClass: '',
  }
}

export const alertSchema = {
  type: 'alert',
  icon: 'alert',
  formItemFlag: false,
  options: {
    name: '',
    title: 'Good things are coming...',
    type: 'info',
    description: '',
    closable: true,
    closeText: '',
    center: true,
    showIcon: false,
    effect: 'light',
    hidden: false,
    onClose: '',
    customClass: '',
  }
}

export const autoCompleteSchema = {
  type: 'auto-complete',
  icon: 'autocomplete',
  formItemFlag: true,
  options: {
    name: '',
    label: '',
    labelZh: '',
    labelAlign: '',
    type: 'text',
    defaultValue: '',
    placeholder: '',
    columnWidth: '200px',
    size: '',
    labelWidth: null,
    labelHidden: false,
    readonly: false,
    disabled: false,
    hidden: false,
    clearable: true,
    showPassword: false,
    required: false,
    requiredHint: '',
    validation: '',
    validationHint: '',
    optionItems: [],
    //-------------------
    customClass: '',  //自定义css类名
    labelIconClass: null,
    labelIconPosition: 'rear',
    labelTooltip: null,
    minLength: null,
    maxLength: null,
    showWordLimit: false,
    prefixIcon: '',
    suffixIcon: '',
    appendButton: false,
    appendButtonDisabled: false,
    buttonIcon: 'el-icon-search',
    //-------------------
    onMounted: '',
    onChange: '',
  },
}

export const readOnlySchema = {
  type: 'read-only',
  icon: 'eye',
  formItemFlag: true,
  options: {
    name: '',
    label: '',
    labelZh: '',
    labelAlign: '',
    type: 'text',
    defaultValue: '',
    placeholder: '',
    columnWidth: '200px',
    size: '',
    labelWidth: null,
    labelHidden: false,
    hidden: false,
    showPassword: false,
    //-------------------
    customClass: ['fitcontent'],  //自定义css类名
    labelIconClass: null,
    labelIconPosition: 'rear',
    labelTooltip: null,
    minLength: null,
    maxLength: null,
    showWordLimit: false,
    prefixIcon: '',
    suffixIcon: '',
    appendButton: false,
    appendButtonDisabled: false,
    buttonIcon: 'el-icon-search',
    //-------------------
    onCreated: '',
    onMounted: '',
    onInput: '',
    onChange: '',
    onFocus: '',
    onBlur: '',
    onValidate: '',
  },
}

export const selectGroupSchema = {
  type: 'select-group',
  icon: 'select-group-field',
  formItemFlag: true,
  options: {
    name: '',
    label: '',
    labelZh: '',
    labelAlign: '',
    defaultValue: '',
    placeholder: '',
    prefixIcon: '',
    columnWidth: '200px',
    size: '',
    labelWidth: null,
    labelHidden: false,
    disabled: false,
    hidden: false,
    clearable: true,
    filterable: false,
    allowCreate: false,
    remote: false,
    automaticDropdown: false,  //自动下拉
    multiple: false,
    multipleLimit: 0,
    optionItems: [
    ],
    required: false,
    requiredHint: '',
    validation: '',
    validationHint: '',
    //-------------------
    customClass: '',  //自定义css类名
    labelIconClass: null,
    labelIconPosition: 'rear',
    labelTooltip: null,
    //-------------------
    onCreated: '',
    onMounted: '',
    onRemoteQuery: '',
    onChange: '',
    onFocus: '',
    onBlur: '',
    onValidate: '',
  }
}

export const hrefSchema = {
  type: 'href',
  icon: 'href',
  formItemFlag: true,
  options: {
    name: '',
    label: '',
    labelZh: '',
    labelAlign: '',
    labelWidth: null,
    labelHidden: false,
    disabled: false,
    hidden: false,
    clearable: true,
    defaultValue: 'https://app4.wclsolution.com/share/allList',
    hrefContent:'',
    //-------------------
    customClass: '',  //自定义css类名
    labelIconClass: null,
    labelIconPosition: 'rear',
    labelTooltip: null,
    //-------------------
    onCreated: "// this.setHrefContent('test')",
    onMounted: "// this.setHrefContent('test')",
  }
}
