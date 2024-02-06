Ext.define('MyApp230111.view.components.DialogSubmit', {
    extend: 'Ext.Dialog',
    alias: 'widget.dialog-submit',
    closable: true,
    bind: {
        data: {
            id : `{id}`,
            radio : `{radio}`,
            number: `{number}`,
            email: `{email}`,
            name: `{name}`,
            date: `{date}`,
            cost: `{cost}`
        }
    },

    tpl: [
        `수학비서 아이디 : {id}`,
        `<br/>`,
        `<tpl if="radio == 1">사업자번호 :`,
        `<tpl else>전화번호 :`,
        `</tpl>`,
        `<br/>`,
        `{[values.radio == 1 ? '사업자번호' : '전화번호']} :`,
        ` {number}`,
        `<br/>`,
        `이메일 : {email}`,
        `<br/>`,
        `입금자명 : {name}`,
        `<br/>`,
        `입금 날짜 : {[Ext.Date.format(values.date, "Y년 m월 d일")]}`,
        `<br/>`,
        `입금 금액 : {cost}`,
        `<br/><br/>`,
        `위 내용이 맞으면 확인, 수정하려면 취소를 눌러주세요.`
    ]
})