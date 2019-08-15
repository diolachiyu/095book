function book() {
    var mima=prompt('输入读书码')
    if (mima==15522){
        alert('输入正确:)身份为[访问者]')
        window.open('img/book/book.html')
    }
    if (mima==66666){
        alert('输入正确:)身份为[作者]')
        window.open('img/book/book.html')
    }
    if (mima==null){
        alert('输入为空:D')
    }
}