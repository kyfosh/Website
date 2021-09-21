$(document).ready(function () {
    //nav bar hiding / showing function
    var previousScroll = 0;
    $("#page").scroll(function () {
        var currentScroll = $(this).scrollTop();
        if (currentScroll < 100) {
            showNav();
        } else if (currentScroll > 0 && currentScroll < $("#page").height()*4.5) {
            if (currentScroll > previousScroll) {
                hideNav();
            } else {
                showNav();
            }
            previousScroll = currentScroll;
        }
    });

    function hideNav() {
        $(".nav").removeClass("is-showing").addClass("is-hidden");
    }

    function showNav() {
        $(".nav").removeClass("is-hidden").addClass("is-showing");
    }

    name();
    $("#selection").addClass("up");
    setTimeout(()=>{
        $("#selection").removeClass("up").addClass("down");
        major();
        setTimeout(()=>{
            $("#selection").removeClass("down").addClass("after");
        },9500)
    },6000);


    //typing on landing
    function name(){
        setTimeout(()=>{
            setTimeout(()=> {
                $("#title").append("I");
                setTimeout(()=> {
                    $("#title").text($("#title").text().slice(0,-1));
                    setTimeout(()=> {
                        $("#title").append("I");
                        setTimeout(()=> {
                            $("#title").text($("#title").text().slice(0,-1));
                            setTimeout(()=> {
                                $("#title").append("KI");
                                setTimeout(()=> {
                                    $("#title").text($("#title").text().slice(0,-1));
                                    setTimeout(()=> {
                                        $("#title").append("yI");
                                        setTimeout(()=> {
                                            $("#title").text($("#title").text().slice(0,-1));
                                            setTimeout(()=> {
                                                $("#title").append("rI");
                                                setTimeout(()=> {
                                                    $("#title").text($("#title").text().slice(0,-1));
                                                    setTimeout(()=> {
                                                        $("#title").append("aI");
                                                        setTimeout(()=> {
                                                            $("#title").text($("#title").text().slice(0,-1));
                                                            setTimeout(()=> {
                                                                $("#title").append(" I");
                                                                setTimeout(()=> {
                                                                    $("#title").text($("#title").text().slice(0,-1));
                                                                    setTimeout(()=> {
                                                                        $("#title").append("FI");
                                                                        setTimeout(()=> {
                                                                            $("#title").text($("#title").text().slice(0,-1));
                                                                            setTimeout(()=> {
                                                                                $("#title").append("aI");
                                                                                setTimeout(()=> {
                                                                                    $("#title").text($("#title").text().slice(0,-1));
                                                                                    setTimeout(()=> {
                                                                                        $("#title").append("uI");
                                                                                        setTimeout(()=> {
                                                                                            $("#title").text($("#title").text().slice(0,-1));
                                                                                            setTimeout(()=> {
                                                                                                $("#title").append("cI");
                                                                                                setTimeout(()=> {
                                                                                                    $("#title").text($("#title").text().slice(0,-1));
                                                                                                    setTimeout(()=> {
                                                                                                        $("#title").append("hI");
                                                                                                        setTimeout(()=> {
                                                                                                            $("#title").text($("#title").text().slice(0,-1));
                                                                                                            setTimeout(()=> {
                                                                                                                $("#title").append("eI");
                                                                                                                setTimeout(()=> {
                                                                                                                    $("#title").text($("#title").text().slice(0,-1));
                                                                                                                    setTimeout(()=> {
                                                                                                                        $("#title").append("rI");
                                                                                                                        setTimeout(()=> {
                                                                                                                            $("#title").text($("#title").text().slice(0,-1));
                                                                                                                            setTimeout(()=> {
                                                                                                                                $("#title").append("I");
                                                                                                                                setTimeout(()=> {
                                                                                                                                    $("#title").text($("#title").text().slice(0,-1));
                                                                                                                                }, 500);
                                                                                                                            }, 500);
                                                                                                                        }, 100);
                                                                                                                    }, 100);
                                                                                                                }, 100);
                                                                                                            }, 100);
                                                                                                        }, 100);
                                                                                                    }, 100);
                                                                                                }, 100);
                                                                                            }, 100);
                                                                                        }, 100);
                                                                                    }, 100);
                                                                                }, 100);
                                                                            }, 100);
                                                                        }, 100);
                                                                    }, 100);
                                                                }, 100);
                                                            }, 100);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                    }, 100);
                                }, 100);
                            }, 100);
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        },500);
    }

    function major(){
        setTimeout(()=>{
            setTimeout(()=> {
                $("#subtitle").append("I");
                setTimeout(()=> {
                    $("#subtitle").text($("#subtitle").text().slice(0,-1));
                    setTimeout(()=> {
                        $("#subtitle").append("I");
                        setTimeout(()=> {
                            $("#subtitle").text($("#subtitle").text().slice(0,-1));
                            setTimeout(()=> {
                                $("#subtitle").append("CI");
                                setTimeout(()=> {
                                    $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                    setTimeout(()=> {
                                        $("#subtitle").append("oI");
                                        setTimeout(()=> {
                                            $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                            setTimeout(()=> {
                                                $("#subtitle").append("mI");
                                                setTimeout(()=> {
                                                    $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                    setTimeout(()=> {
                                                        $("#subtitle").append("pI");
                                                        setTimeout(()=> {
                                                            $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                            setTimeout(()=> {
                                                                $("#subtitle").append("uI");
                                                                setTimeout(()=> {
                                                                    $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                    setTimeout(()=> {
                                                                        $("#subtitle").append("tI");
                                                                        setTimeout(()=> {
                                                                            $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                            setTimeout(()=> {
                                                                                $("#subtitle").append("eI");
                                                                                setTimeout(()=> {
                                                                                    $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                    setTimeout(()=> {
                                                                                        $("#subtitle").append("rI");
                                                                                        setTimeout(()=> {
                                                                                            $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                            setTimeout(()=> {
                                                                                                $("#subtitle").append(" I");
                                                                                                setTimeout(()=> {
                                                                                                    $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                    setTimeout(()=> {
                                                                                                        $("#subtitle").append("SI");
                                                                                                        setTimeout(()=> {
                                                                                                            $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                            setTimeout(()=> {
                                                                                                                $("#subtitle").append("cI");
                                                                                                                setTimeout(()=> {
                                                                                                                    $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                    setTimeout(()=> {
                                                                                                                        $("#subtitle").append("iI");
                                                                                                                        setTimeout(()=> {
                                                                                                                            $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                            setTimeout(()=> {
                                                                                                                                $("#subtitle").append("eI");
                                                                                                                                setTimeout(()=> {
                                                                                                                                    $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                                    setTimeout(()=> {
                                                                                                                                        $("#subtitle").append("nI");
                                                                                                                                        setTimeout(()=> {
                                                                                                                                            $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                                            setTimeout(()=> {
                                                                                                                                                $("#subtitle").append("cI");
                                                                                                                                                setTimeout(()=> {
                                                                                                                                                    $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                                                    setTimeout(()=> {
                                                                                                                                                        $("#subtitle").append("eI");
                                                                                                                                                        setTimeout(()=> {
                                                                                                                                                            $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                                                            setTimeout(()=> {
                                                                                                                                                                $("#subtitle").append(" I");
                                                                                                                                                                setTimeout(()=> {
                                                                                                                                                                    $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                                                                    setTimeout(()=> {
                                                                                                                                                                        $("#subtitle").append("aI");
                                                                                                                                                                        setTimeout(()=> {
                                                                                                                                                                            $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                                                                            setTimeout(()=> {
                                                                                                                                                                                $("#subtitle").append("nI");
                                                                                                                                                                                setTimeout(()=> {
                                                                                                                                                                                    $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                                                                                    setTimeout(()=> {
                                                                                                                                                                                        $("#subtitle").append("dI");
                                                                                                                                                                                        setTimeout(()=> {
                                                                                                                                                                                            $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                                                                                            setTimeout(()=> {
                                                                                                                                                                                                $("#subtitle").append(" I");
                                                                                                                                                                                                setTimeout(()=> {
                                                                                                                                                                                                    $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                                                                                                    setTimeout(()=> {
                                                                                                                                                                                                        $("#subtitle").append("EI");
                                                                                                                                                                                                        setTimeout(()=> {
                                                                                                                                                                                                            $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                                                                                                            setTimeout(()=> {
                                                                                                                                                                                                                $("#subtitle").append("nI");
                                                                                                                                                                                                                setTimeout(()=> {
                                                                                                                                                                                                                    $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                                                                                                                    setTimeout(()=> {
                                                                                                                                                                                                                        $("#subtitle").append("gI");
                                                                                                                                                                                                                        setTimeout(()=> {
                                                                                                                                                                                                                            $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                                                                                                                            setTimeout(()=> {
                                                                                                                                                                                                                                $("#subtitle").append("iI");
                                                                                                                                                                                                                                setTimeout(()=> {
                                                                                                                                                                                                                                    $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                                                                                                                                    setTimeout(()=> {
                                                                                                                                                                                                                                        $("#subtitle").append("nI");
                                                                                                                                                                                                                                        setTimeout(()=> {
                                                                                                                                                                                                                                            $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                                                                                                                                            setTimeout(()=> {
                                                                                                                                                                                                                                                $("#subtitle").append("eI");
                                                                                                                                                                                                                                                setTimeout(()=> {
                                                                                                                                                                                                                                                    $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                                                                                                                                                    setTimeout(()=> {
                                                                                                                                                                                                                                                        $("#subtitle").append("eI");
                                                                                                                                                                                                                                                        setTimeout(()=> {
                                                                                                                                                                                                                                                            $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                                                                                                                                                            setTimeout(()=> {
                                                                                                                                                                                                                                                                $("#subtitle").append("rI");
                                                                                                                                                                                                                                                                setTimeout(()=> {
                                                                                                                                                                                                                                                                    $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                                                                                                                                                                    setTimeout(()=> {
                                                                                                                                                                                                                                                                        $("#subtitle").append("iI");
                                                                                                                                                                                                                                                                        setTimeout(()=> {
                                                                                                                                                                                                                                                                            $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                                                                                                                                                                            setTimeout(()=> {
                                                                                                                                                                                                                                                                                $("#subtitle").append("nI");
                                                                                                                                                                                                                                                                                setTimeout(()=> {
                                                                                                                                                                                                                                                                                    $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                                                                                                                                                                                    setTimeout(()=> {
                                                                                                                                                                                                                                                                                        $("#subtitle").append("gI");
                                                                                                                                                                                                                                                                                        setTimeout(()=> {
                                                                                                                                                                                                                                                                                            $("#subtitle").text($("#subtitle").text().slice(0,-1));
                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                        }, 100);
                                                                                                                                                                                                                                                                                    }, 100);
                                                                                                                                                                                                                                                                                }, 100);
                                                                                                                                                                                                                                                                            }, 100);
                                                                                                                                                                                                                                                                        }, 100);
                                                                                                                                                                                                                                                                    }, 100);
                                                                                                                                                                                                                                                                }, 100);
                                                                                                                                                                                                                                                            }, 100);
                                                                                                                                                                                                                                                        }, 100);
                                                                                                                                                                                                                                                    }, 100);
                                                                                                                                                                                                                                                }, 100);
                                                                                                                                                                                                                                            }, 100);
                                                                                                                                                                                                                                        }, 100);
                                                                                                                                                                                                                                    }, 100);
                                                                                                                                                                                                                                }, 100);
                                                                                                                                                                                                                            }, 100);
                                                                                                                                                                                                                        }, 100);
                                                                                                                                                                                                                    }, 100);
                                                                                                                                                                                                                }, 100);
                                                                                                                                                                                                            }, 100);
                                                                                                                                                                                                        }, 100);
                                                                                                                                                                                                    }, 100);
                                                                                                                                                                                                }, 100);
                                                                                                                                                                                            }, 100);
                                                                                                                                                                                        }, 100);
                                                                                                                                                                                    }, 100);
                                                                                                                                                                                }, 100);
                                                                                                                                                                            }, 100);
                                                                                                                                                                        }, 100);
                                                                                                                                                                    }, 100);
                                                                                                                                                                }, 100);
                                                                                                                                                            }, 100);
                                                                                                                                                        }, 100);
                                                                                                                                                    }, 100);
                                                                                                                                                }, 100);
                                                                                                                                            }, 100);
                                                                                                                                        }, 100);
                                                                                                                                    }, 100);
                                                                                                                                }, 100);
                                                                                                                            }, 100);
                                                                                                                        }, 100);
                                                                                                                    }, 100);
                                                                                                                }, 100);
                                                                                                            }, 100);
                                                                                                        }, 100);
                                                                                                    }, 100);
                                                                                                }, 100);
                                                                                            }, 100);
                                                                                        }, 100);
                                                                                    }, 100);
                                                                                }, 100);
                                                                            }, 100);
                                                                        }, 100);
                                                                    }, 100);
                                                                }, 100);
                                                            }, 100);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                    }, 100);
                                }, 100);
                            }, 100);
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        },500);

    }
});