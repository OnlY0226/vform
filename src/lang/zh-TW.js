export default {
  application: {
    'zh-TW': '繁體中文',
    'zh-CN': '简体中文',
    'en-US': 'English',
    productTitle: '表單設計器',
    github: 'GitHub',
    document: '文檔',
    qqGroup: '技術WX群',
    deployment: '私有部署',
    subscription: '訂閱Pro',
  },

  designer: {
    componentLib: '組件庫',
    formLib: '表單模板',
    containerTitle: '容器',
    dragHandlerHint: '鼠標拖拽容器組件或欄位組件並放置於表單中',
    dragAction: '拖動',
    basicFieldTitle: '基礎欄位',
    advancedFieldTitle: '高級欄位',
    customFieldTitle: '自定義擴展欄位',

    noWidgetHint: '請從左側列表中選擇一個組件, 然後用鼠標拖動組件放置於此處.',

    widgetLabel: {
      grid:             '柵格',
      table:            '表格',
      tab:              '標簽頁',
      section:          '區塊',
      'sub-form':       '子表單',
      'grid-col':       '柵格列',
      'table-cell':     '單元格',
      'tab-pane':       '選項卡頁',
      'data-table':     '數據表格',

      input:          '單行輸入',
      textarea:       '多行輸入',
      number:         '計數器',
      radio:          '單選項',
      checkbox:       '多選項',
      select:         '下拉選項',
      time:           '時間',
      'time-range':   '時間範圍',
      date:           '日期',
      'date-range':   '日期範圍',
      switch:         '開關',
      rate:           '評分',
      color:          '顏色選擇器',
      slider:         '滑塊',
      'static-text':  '靜態文字',
      'html-text':    'HTML',
      button:         '按鈕',
      divider:        '分隔線',

      'picture-upload': '圖片',
      'file-upload':    '文件',
      'rich-editor':    '富文本',
      cascader:         '級聯選擇',
      slot:             '插槽',
      dragTip1:         '將文件拖拽到這裡，或',
      dragTip2:         '點擊上傳',

      custom:           'Custom Component',
    },

    hint: {
      selectParentWidget: '選中父組件',
      moveUpWidget: '上移組件',
      moveDownWidget: '下移組件',
      cloneWidget: '復制組件',
      insertRow: '插入新行',
      insertColumn: '插入新列',
      remove: '移除組件',
      cellSetting: '單元格操作',
      dragHandler: '拖拽手柄',
      copyField: '復制欄位組件',
      onlyFieldWidgetAcceptable: '子表單只能接收欄位組件',
      moveUpFirstChildHint: '已經移動到最上面',
      moveDownLastChildHint: '已經移動到最下麵',

      closePreview: '關閉',
      copyJson: '復制JSON',
      saveFormJson: '保存為文件',
      copyVueCode: '復制Vue代碼',
      copyHtmlCode: '復制HTML代碼',
      copyJsonSuccess: '復制JSON成功',
      importJsonSuccess: '導入JSON成功',
      copyJsonFail: '復制JSON失敗',
      copyVueCodeSuccess: '復制Vue代碼成功',
      copyVueCodeFail: '復制Vue代碼失敗',
      copyHtmlCodeSuccess: '復制HTML代碼成功',
      copyHtmlCodeFail: '復制HTML代碼失敗',
      saveVueCode: '保存Vue文件',
      saveHtmlCode: '保存Html文件',
      getFormData: '獲取數據',
      resetForm: '重置表單',
      disableForm: '禁用編輯',
      enableForm: '恢復編輯',
      exportFormData: '表單數據',
      copyFormData: '復制JSON',
      saveFormData: '保存為文件',
      copyVue2SFC: '復制Vue2代碼',
      copyVue3SFC: '復制Vue3代碼',
      copySFCFail: '復制SFC代碼失敗',
      copySFCSuccess: '復制SFC代碼成功',
      saveVue2SFC: '保存為Vue2組件',
      saveVue3SFC: '保存為Vue3組件',
      fileNameForSave: '文件名：',
      saveFileTitle: '保存為文件',
      fileNameInputPlaceholder: '請輸入文件名',
      sampleLoadedSuccess: '表單示例加載成功',
      sampleLoadedFail: '表單示例加載失敗',
      loadFormTemplate: '加載此模板',
      loadFormTemplateHint: '是否加載這個模板？加載後會覆蓋設計器當前表單，你可以使用“撤銷”功能恢復。',
      loadFormTemplateSuccess: '表單模板加載成功',
      loadFormTemplateFailed: '表單模板加載失敗',
      currentNodeCannotBeSelected: '當前組件節點不可選擇',

      widgetSetting: '組件設置',
      formSetting: '表單設置',

      prompt: '提示',
      confirm: '確定',
      cancel: '取消',
      import: '導入',
      importJsonHint: '導入的JSON內容須符合下述格式，以保證順利導入.',
      invalidOptionsData: '無效的選項數據:',
      lastPaneCannotBeDeleted: '僅剩一個選項卡頁不可刪除.',
      duplicateName: '組件名稱已存在: ',
      nameRequired: '組件名稱不可為空',

      numberValidator: '數字',
      letterValidator: '字母',
      letterAndNumberValidator: '數字字母',
      mobilePhoneValidator: '手機號碼',
      emailValidator: '郵箱',
      urlValidator: '網址',
      noChineseValidator: '非中文字元',
      chineseValidator: '僅中文字元',

      rowspanNotConsistentForMergeEntireRow: '存在行高不一致的單元格, 無法合並整行.',
      colspanNotConsistentForMergeEntireColumn: '存在列寬不一致的單元格, 無法合並整列.',
      rowspanNotConsistentForDeleteEntireRow: '存在行高不一致的單元格, 不可刪除整行.',
      colspanNotConsistentForDeleteEntireColumn: '存在列寬不一致的單元格, 不可刪除整列.',
      lastColCannotBeDeleted: '最後一列不可刪除.',
      lastRowCannotBeDeleted: '最後一行不可刪除.',
    },

    toolbar: {
      undoHint: '撤銷',
      redoHint: '重做',
      pcLayout: 'PC',
      padLayout: 'Pad',
      mobileLayout: 'H5',
      nodeTreeHint: '組件層次結構樹',
      nodeTreeTitle: '組件層次結構樹',
      clear: '清空',
      preview: '預覽',
      importJson: '導入JSON',
      exportJson: '導出JSON',
      exportCode: '導出代碼',
      generateCode: '生成代碼',
      generateSFC: '生成SFC',
    },

    setting: {
      saveRemoteOptions: '保存遠程選項',
      never: '從不',
      ask: '詢問',
      always: '總是',
      basicSetting: '基本屬性',
      attributeSetting: '屬性設置',
      commonSetting: '常見屬性',
      advancedSetting: '高級屬性',
      eventSetting: '事件屬性',
      uniqueName: '唯一名稱',
      editNameHelp: '修改名稱後需按回車確認',
      label: '標簽(英文)',
      labelZh: '標簽(中文)',
      displayType: '顯示類型',
      defaultValue: '默認值',
      placeholder: '占位內容',
      startPlaceholder: '起始占位內容',
      endPlaceholder: '截止占位內容',
      widgetColumnWidth: '組件列寬',
      widgetSize: '組件大小',
      fontSize: '字體大小',
      showStops: '顯示間斷點',
      displayStyle: '顯示樣式',
      inlineLayout: '行內',
      blockLayout: '塊',
      buttonStyle: '顯示為按鈕',
      border: '帶有邊框',
      labelWidth: '標簽寬度',
      rows: '行數',
      labelHidden: '隱藏欄位標簽',
      required: '必填欄位',
      drag: '拖拽',
      validation: '欄位校驗',
      requiredHint: '必填校驗提示',
      validationHelp: '支持輸入正則表達式',
      validationHint: '校驗失敗提示',
      readonly: '只讀',
      disabled: '禁用',
      hidden: '隱藏',
      textContent: '靜態文字',
      htmlContent: 'HTML',
      clearable: '可清除',
      editable: '可輸入',
      format: '顯示格式',
      valueFormat: '綁定值格式',
      defaultTime: '默認具體時刻',
      showPassword: '可顯示密碼',
      filterable: '可搜索選項',
      allowCreate: '允許創建選項',
      remote: '可遠程搜索',
      automaticDropdown: '自動彈出選項',
      multiple: '選項可多選',
      multipleLimit: '多選數量限制',
      checkStrictly: '任意級節點可選',
      contentPosition: '文字位置',
      plain: '樸素按鈕',
      round: '圓角按鈕',
      circle: '圓形按鈕',
      icon: '圖標',
      optionsSetting: '選項設置',
      addOption: '增加選項',
      importOptions: '導入選項',
      resetDefault: '重設選中項',
      uploadSetting: '上傳參數設置',
      uploadURL: '上傳地址',
      uploadName: '上傳的文件欄位名',
      uploadTip: '上傳提示內容',
      withCredentials: '發送cookie憑證',
      multipleSelect: '文件可多選',
      showFileList: '顯示文件列表',
      limit: '最大上傳數量',
      fileMaxSize: '文件大小限制(MB)',
      fileTypes: '上傳文件類型',
      fileTypesHelp: '支持添加其他文件類型',
      headers: '上傳請求頭',

      cellWidth: '寬度',
      cellHeight: '高度',
      gridColHeight: '柵格列統一高度(px)',
      gutter: '柵格間隔(px)',
      columnSetting: '柵格屬性設置',
      colsOfGrid: '當前柵格列:',
      colSpanTitle: '柵格寬度',
      colOffsetTitle: '左側間隔格數',
      colPushTitle: '右移柵格數',
      colPullTitle: '左移柵格數',
      addColumn: '增加柵格',
      responsive: '響應式佈局',

      tabPaneSetting: '選項卡設置',
      addTabPane: '增加選項卡頁',
      paneActive: '激活',

      customLabelIcon: '定製欄位標簽',
      labelIconClass: '標簽Icon樣式',
      labelIconPosition: '標簽Icon位置',
      labelTooltip: '標簽文字提示',
      minValue: '最小值',
      maxValue: '最大值',
      precision: '精度',
      step: '增減步長',
      controlsPosition: '控制按鈕位置',
      minLength: '最小長度',
      maxLength: '最大長度',
      showWordLimit: '顯示字數統計',
      prefixIcon: '頭部Icon',
      suffixIcon: '尾部Icon',
      inputButton: '輸入框按鈕設置',
      appendButton: '添加後置按鈕',
      appendButtonDisabled: '後置按鈕禁用',
      appendButtonIcon: '後置按鈕Icon',
      buttonIcon: '按鈕Icon',
      switchWidth: '開關寬度（像素）',
      activeText: '開啟時文字描述',
      inactiveText: '關閉時文字描述',
      activeColor: '開啟時背景色',
      inactiveColor: '關閉時背景色',
      maxStars: '最大評分值',
      lowThreshold: '低分界限值',
      highThreshold: '高分界限值',
      allowHalf: '允許半選',
      showText: '顯示輔助文字',
      showScore: '顯示當前分數',
      range: '是否為範圍選擇',
      vertical: '是否豎向顯示',
      showBlankRow: '默認顯示新行',
      showRowNumber: '顯示行號',

      insertColumnToLeft: '插入左側列',
      insertColumnToRight: '插入右側列',
      insertRowAbove: '插入上方行',
      insertRowBelow: '插入下方行',
      mergeLeftColumn: '合並左側單元格',
      mergeRightColumn: '合並右側單元格',
      mergeEntireRow: '合並整行',
      mergeRowAbove: '合並上方單元格',
      mergeRowBelow: '合並下方單元格',
      mergeEntireColumn: '合並整列',
      undoMergeCol: '撤銷列合並',
      undoMergeRow: '撤銷行合並',
      deleteEntireCol: '刪除整列',
      deleteEntireRow: '刪除整行',

      widgetName: '組件唯一名稱',
      formSize: '全局組件大小',
      labelPosition: '欄位標簽位置',
      topPosition: '頂部',
      leftPosition: '左邊',
      labelAlign: '標簽對齊',
      leftAlign: '居左',
      centerAlign: '居中',
      rightAlign: '居右',
      formCss: '表單全局CSS',
      addCss: '編寫CSS',
      customClass: '自定義CSS樣式',
      globalFunctions: '表單全局函數',
      addEventHandler: '編寫代碼',
      editWidgetEventHandler: '組件事件處理',
      editFormEventHandler: '表單事件處理',
      formSFCSetting: '生成SFC設置',
      formModelName: '數據對象名稱',
      formRefName: '引用名稱',
      formRulesName: '驗證規則名稱',
      syntaxCheckWarning: 'JS代碼存在語法錯誤，請仔細檢查！',
      href: "鏈接",
      hrefContent: "鏈接標題",
      hrefTip: "href 為必填",

      //data-table
      tableWidth: '寬度(px/%)',
      tableHeight: '高度(px/%)',
      showCheckBox: '是否顯示復選框列',
      showIndex: '是否顯示行號',
      showPagination: '是否顯示分頁',
      smallPagination: '小型分頁',
      tableColEdit: '表格列編輯',
      tableDataEdit: '表格數據編輯',
      showSummary: '是否合計',
      stripe: '是否斑馬線',
      rowSpacing: '行距（px）',
      editAction: '編輯...',
      columnName: '欄位名稱',
      columnLabel: '顯示名稱',
      columnWidth: '列寬(px/%)',
      visibleColumn: '是否顯示',
      sortableColumn: '是否排序',
      fixedColumn: '是否固定',
      alignTypeOfColumn: '對齊方式',
      formatOfColumn: '格式化',
      actionColumn: '操作',
      addTableColumn: '增加列',
      deleteTableColumn: '刪除列',
      OnlyOneColumnCannotBeDeleted: '表格只有一列時不可刪除.',
    }

  }
}
