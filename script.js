$(document).ready(function () {
mainTable = $("#dataTable").DataTable(
{
    searching: true,
    lengthChange: false,
    ordering: false,
    language: {
      paginate: {
        previous: "<span>&#9668;</span>",
        next: "<span>&#9658;</span>",
      },
     
    },
dom: "lrtip",
    pagingType: "simple_numbers",
    pageLength: 6,
    lengthMenu: [1, 6, 12, 24, 50, -1],

  });



  $("#customSearch").on("input",function () {
    mainTable.search($(this).val()).draw();
    
  });
});
 
// DIALOG


  $(document).ready(function () {
    // Initialize the dialog
    $("#dialog1 , #dialog2, #dialog3, #dialog4").dialog({
      autoOpen: false,
      modal: true,
      width: 550,
      height: "auto",
     
      buttons: {
        "Download InDesign and Start": function() {
          $(this).dialog("close");
        }
      }
    });

  $("#startDesignBtn1").on("click", function () {
    $("#dialog1").dialog("open");
  });

  $("#startDesignBtn2").on("click", function () {
    $("#dialog2").dialog("open");
  });
    $("#eyebtn").on("click", function () {
      // Remove buttons from #dialog3
      $("#dialog3").dialog("option", "buttons", []).dialog("open");
    });
   
  $("#pdf-btn").on("click", function () {
   
    $("#dialog4")
      .dialog("option", "buttons", {
        "Download pdf": function () {
          $(this).dialog("close");
        },
        Print: function () {
          $(this).dialog("close");
        },
        
      })
      .dialog("open");

  });
    
  });


