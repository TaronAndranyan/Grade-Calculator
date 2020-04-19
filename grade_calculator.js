function GradeCalculator()
        {
            var ParticipationPercentage =parseInt(document.getElementById('PartPercent').innerHTML);
            var HomeworkPercentage=parseInt(document.getElementById('hwpercent').innerHTML);
            var PM1Percentage=parseInt(document.getElementById('pmpercent').innerHTML);
            var PM2Percentage=parseInt(document.getElementById("pm2percent").innerHTML);
            var PM3Percentage=parseInt(document.getElementById('pm3percent').innerHTML);


            var ParticipationGrade =parseFloat(document.getElementById('part_grade').value);
            var HomeworkGrade =parseFloat(document.getElementById('homework_grade').value);
            var PM1Grade =parseFloat(document.getElementById('prmil1').value);
            var PM2Grade =parseFloat(document.getElementById('prmil2').value);
            var PM3Grade =parseFloat(document.getElementById('prmil3').value);


            var Mycurrentgrade = ParticipationPercentage*ParticipationGrade/100 + HomeworkPercentage*HomeworkGrade/100 + PM1Percentage*PM1Grade/100 + PM2Percentage*PM2Grade/100 + PM3Percentage*PM3Grade/100

            var display=document.getElementById('mycurrentgrade');
            display.innerHTML='My current grade is-' +  Mycurrentgrade;
            }
