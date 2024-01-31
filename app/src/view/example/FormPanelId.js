Ext.define('MyApp230111.view.example.FormPanelId', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formpanelid',
    cls: 'example-form-panel',
    controller: {
        type: 'formpanelidcontroller'
    },
    defaults: {
        cls: 'example-form-panel-container'
    },
    viewModel: true,
    items: [
        {
            xtype: 'container',
            alignSelf: 'center',
            items: [
                {
                    html: '수학비서 아이디',
                    cls: 'example-form-panel-title',
                },
                {
                    xtype: 'textfield',
                    name: 'id',
                    placeholder: '수학비서로 가입하신 아이디를 입력해주세요',
                    cls: 'example-form-panel-id'
                }
            ]
        },
        {
            xtype: 'container',
            items: [
                {
                    html: '법인 또는 개인 선택',
                    cls: 'example-form-panel-title',
                },
                {
                    xtype: 'radiogroup',
                    reference: 'radiogroup_tab',
                    publishes: 'value',
                    cls: 'example-form-panel-radiogroup',
                    items: [
                        {
                            label: '법인 혹은 개인사업자',
                            width: '100%',
                            value: 1,
                            checked: true
                        },
                        { 
                            label: '개인',
                            width: '100%',
                            value: 2
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            items: [
                {
                    bind: {
                        html : `{radiogroup_tab.value == 1 ? '사업자번호 (법인 또는 개인사업자인 경우)' : '전화번호 (개인의 경우)'}`,
                        cls: 'example-form-panel-title',
                    }
                },
                {
                    xtype: 'textfield',
                    name: 'number',
                    bind: {
                        placeholder: `{radiogroup_tab.value == 1 ? '사업자번호를 입력하세요.' : '현금영수증을 발행하는 경우 번호를 입력하세요.'}`,
                    },
                    cls: 'example-form-panel-id'
                }
            ]
        },
        {
            xtype: 'container',
            items: [
                {
                    html: '영수증 이메일',
                    cls: 'example-form-panel-title',
                },
                {
                    xtype: 'textfield',
                    name: 'email',
                    placeholder: '영수증을 받으실 이메일 주소를 입력하세요.',
                    cls: 'example-form-panel-id'
                }
            ]
        },
        {
            xtype: 'container',
            items: [
                {
                    html: '입금자명',
                    cls: 'example-form-panel-title',
                },
                {
                    xtype: 'textfield',
                    name: 'name',
                    placeholder: '김수학',
                    cls: 'example-form-panel-id'
                }
            ]
        },
        {
            xtype: 'container',
            items: [
                {
                    html: '입금 날짜',
                    cls: 'example-form-panel-title',
                },
                {
                    xtype: 'datepickernativefield',
                    name: 'date',
                    value: new Date(),
                    cls: 'example-form-panel-id'
                }
            ]
        },
        {
            xtype: 'container',
            items: [
                {
                    html: '입금 금액',
                    cls: 'example-form-panel-title',
                },
                {
                    xtype: 'spinnerfield',
                    name: 'money',
                    value: 10000,
                    cls: 'example-form-panel-id'
                }
            ]
        },
        {
            xtype: 'container',
            items: [
                {
                    xtype: 'button',
                    cls: 'example-form-panel-button',
                    text: '제출',
                    handler: 'onSubmitButtonClicked'
                }
            ]
        }
    ]
})