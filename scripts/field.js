// initialize variable
const sidebarTabs = document.querySelectorAll(".sidebar ul li");
const mainSections = document.querySelectorAll(".main section");

sidebarTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        sidebarTabs.forEach(tabs => tabs.classList.remove("hover"));
        tab.setAttribute("class", "hover");
    })
})

// Field account
const field_dashboardSection = document.getElementById("field_dashboardSection");
const field_feildReportSection = document.getElementById("field_feildReportSection");
const field_settingsSection = document.getElementById("field_settingsSection");
const field_helpSection = document.getElementById("field_helpSection");

// Dashboard Section
function showFieldDashboardSection(){
    field_dashboardSection.setAttribute("style", "display : block");
    field_feildReportSection.setAttribute("style", "display : none");
    field_settingsSection.setAttribute("style", "display : none");
    field_helpSection.setAttribute("style", "display : none");
}

// Field Report Section
function showFieldFieldReportSection(){
    field_dashboardSection.setAttribute("style", "display : none");
    field_feildReportSection.setAttribute("style", "display : block");
    field_settingsSection.setAttribute("style", "display : none");
    field_helpSection.setAttribute("style", "display : none");
}

// Settings Section
function showFieldSettingsSection(){
    field_dashboardSection.setAttribute("style", "display : none");
    field_feildReportSection.setAttribute("style", "display : none");
    field_settingsSection.setAttribute("style", "display : block");
    field_helpSection.setAttribute("style", "display : none");
}

// Help Section
function showFieldHelpSection(){
    field_dashboardSection.setAttribute("style", "display : none");
    field_feildReportSection.setAttribute("style", "display : none");
    field_settingsSection.setAttribute("style", "display : none");
    field_helpSection.setAttribute("style", "display : block");
}