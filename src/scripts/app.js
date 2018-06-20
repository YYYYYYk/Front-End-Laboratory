
//�����ļ���ȷ��urlֵ.
function getUrl(url) {

    if(url == ""){
        return "./README.md";
    }else if (url.search("README")+1) { // -1 ��Booleanֵ��True.
        return ("./"+url.slice(1)+".md");
    } else {
        return ("./docs/"+url.slice(1)+".md");
    }
}

//��ʼ����ҳ
$(document).ready(function () {
    //��ȡ�ļ�Url
    var url = getUrl(location.hash);

    //Ϊ��location.hashֵ��<a>��ǩ���activeЧ��
    $("#nav-ul li a[href='"+(location.hash ? location.hash : "#README")+"']").addClass('active');

    $.get(url,
        function (data) {
            $('#content').html(marked(data));

            $('#content code').map(function() {
                Prism.highlightElement(this);
            });
        }
    );
});

//Ϊ�˵��б���¼�
$('#nav-ul').on('click',
    function (event) {
        //����������
        if(window.innerWidth<768){
            $('#collapse-target').collapse('hide');
        }

        //�Ƴ�����.active����Ӷ�Ӧ��.active
        $('#nav-ul li a').removeClass('active');
        $(event.target).addClass('active');

        //��ȡĿ��Ԫ�ص�href����ֵ
        var url= getUrl(event.target.getAttribute('href'));//==$(event.target).attr('href');

        //��ȡͬԴ��markdown�ļ�������
        $.get(
            url,function (data) {
                $('#content').html(marked(data));

                $('#content code').map(function() {
                    Prism.highlightElement(this);
                });
            }
        )
    }
)