
$('#nav-ul').on(
    'click',function (event) {
        //隐藏下拉框
        if(window.innerWidth<768){
            $('#collapse-target').collapse('hide');
        }

        var url = event.target.getAttribute('href');
        var source;

        //-1 的Boolean值是True.
        if (url.search("README")+1) {
            source = "./"+url.slice(1)+".md";
        } else {
            source = "./docs/"+url.slice(1)+".md";
        }
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
$(document).ready(function () {
    $.get("./README.md",function (data) {
            $('#content').html(marked(data));

            $('#content code').map(function() {
                Prism.highlightElement(this);
            });
        }
    );
});