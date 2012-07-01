var predefColors = {0: "#000"};

var chunk2 = {
    commits : [
        // maint branch
        {id : "maint001", time : 352, space :  3, message : "maintenance branch",   parents : []},
        {id : "maint002", time : 357, space :  3, message : "",                     parents : [["maint001", 352, 0]]},
        {id : "maint003", time : 358, space :  3, message : "",                     parents : [["maint002", 352, 0]]},
        {id : "maint004", time : 360, space :  3, message : "",                     parents : [["maint003", 352, 0]]},
        {id : "maint005", time : 386, space :  3, message : "",                     parents : [["maint004", 352, 0]]},
    
        // trunk
        {id : "trunk001", time : 352, space :  0, message : "trunk",                parents : []},
        {id : "trunk002", time : 355, space :  0, message : "mvn release",          parents : [["trunk001", 352, 0]]},
        {id : "trunk003", time : 360, space :  0, message : "reintegrate",          parents : [["trunk001", 352, 0], ["maint004", 352, 0]]},
        {id : "trunk004", time : 366, space :  0, message : "reintegrate",          parents : [["trunk002", 352, 0], ["feat1005", 352, 0]]},
        {id : "trunk005", time : 370, space :  0, message : "reintegrate",          parents : [["trunk004", 352, 0], ["feat2001", 352, 0]]},
        {id : "trunk006", time : 374, space :  0, message : "mvn release",          parents : [["trunk005", 352, 0]]},
        {id : "trunk007", time : 378, space :  0, message : "reintegrate",          parents : [["trunk006", 352, 0], ["feat3003", 352, 0]]},
        {id : "trunk008", time : 382, space :  0, message : "reintegrate",          parents : [["trunk007", 352, 0], ["emer1004", 352, 0]]},
        {id : "trunk009", time : 386, space :  0, message : "mvn release",          parents : [["trunk008", 352, 0]]},
        
        // feature 1
        {id : "feat1001", time : 356, space :  6, message : "feature branch #1",    parents : [["trunk002", 352, 0]]},
        {id : "feat1002", time : 357, space :  6, message : "",                     parents : [["feat1001", 352, 0]]},
        {id : "feat1003", time : 360, space :  6, message : "",                     parents : [["feat1002", 352, 0]]},
        {id : "feat1004", time : 363, space :  6, message : "",                     parents : [["feat1003", 352, 0]]},
        {id : "feat1005", time : 365, space :  6, message : "",                     parents : [["feat1004", 352, 0]]},
        
        // feature 2
        {id : "feat2001", time : 357, space :  9, message : "feature branch #2",    parents : [["trunk002", 353, 10]]},
        
        // feature 3
        {id : "feat3001", time : 358, space : 12, message : "feature branch #3",    parents : [["trunk002", 353, 10]]},
        {id : "feat3002", time : 364, space : 12, message : "",                     parents : [["feat3001", 353, 10]]},
        {id : "feat3003", time : 366, space : 12, message : "",                     parents : [["feat3002", 353, 10]]},
        
        // emergency release
        {id : "emer1001", time : 360, space : 16, message : "tag branch",           parents : []},
        {id : "emer1002", time : 361, space : 16, message : "",                     parents : [["emer1001", 353, 10]]},
        {id : "emer1003", time : 365, space : 16, message : "",                     parents : [["emer1002", 353, 10]]},
        {id : "emer1004", time : 368, space : 16, message : "emergency mvn release",parents : [["emer1003", 353, 10]]},
        
        // space holders
        {id : "plchld01", time : 354, space : 50, message : "",                     parents : []},
        {id : "plchld02", time : 388, space : 50, message : "",                     parents : []}
    ]
};
 