
//计算文件正确的url值.
function getUrl(url) {

    if(url == ""){
        return "./README.md";
    }else if (url.search("README")+1) { // -1 的Boolean值是True.
        return ("./"+url.slice(1)+".md");
    } else {
        return ("./docs/"+url.slice(1)+".md");
    }
}

//初始化主页
$(document).ready(function () {
    //获取文件Url
    var url = getUrl(location.hash);

    //为有location.hash值的<a>标签添加active效果
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

//为菜单列表绑定事件
$('#nav-ul').on('click',
    function (event) {
        //隐藏下拉框
        if(window.innerWidth<768){
            $('#collapse-target').collapse('hide');
        }

        //移除所有.active并添加对应的.active
        $('#nav-ul li a').removeClass('active');
        $(event.target).addClass('active');

        //获取目标元素的href属性值
        var url= getUrl(event.target.getAttribute('href'));//==$(event.target).attr('href');

        //获取同源的markdown文件并解析
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