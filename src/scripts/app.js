//初始化主页
$(document).ready(function () {
    $.get("./README.md",
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
        var url = event.target.getAttribute('href'); //==$(event.target).attr('href');
        var source;

        //计算文件正确的url值.
        // -1 的Boolean值是True.
        if (url.search("README")+1) {
            source = "./"+url.slice(1)+".md";
        } else {
            source = "./docs/"+url.slice(1)+".md";
        }

        //获取同源的markdown文件并解析
        $.get(
            source,function (data) {
                $('#content').html(marked(data));

                $('#content code').map(function() {
                    Prism.highlightElement(this);
                });
            }
        )
    }
)