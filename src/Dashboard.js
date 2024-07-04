import React, { useState } from 'react';
import { 
  Tabs, 
  Tab, 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  CardHeader, 
  Button, 
  TextField 
} from '@mui/material';

const Dashboard = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [value, setValue] = useState(0);

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const submitAnswers = () => {
    setShowResults(true);
  };

  const checkAnswer = (questionId, correctAnswer) => {
    const userAnswer = answers[questionId];
    if (questionId === 6 || questionId === 7) {
      return userAnswer === correctAnswer || userAnswer === correctAnswer.replace('%', '');
    }
    return userAnswer == correctAnswer;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', textAlign: 'right', direction: 'rtl' }}>
      <Typography variant="h4" component="h1" gutterBottom 
        sx={{
          background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          padding: '10px',
          textAlign: 'center'
        }}>
        🎉 יחידת לימוד אינטראקטיבית באחוזים - חינוך מתמטי חוויתי עם נופר 🎉
      </Typography>
      <Tabs value={value} onChange={handleChange} aria-label="dashboard tabs">
        <Tab label="הסבר" />
        <Tab label="דוגמא" />
        <Tab label="מבחן הבנה" />
        <Tab label="קבלו שיעור במתנה" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Card>
          <CardHeader title="הסבר על איך פותרים אחוזים" />
          <CardContent>
            <Typography paragraph>
              כאשר רוצים לחשב אחוזים, חשוב להבין מהו אחוז. אחוז הוא חלק ממאה, כלומר 1% הוא 1 מתוך 100. כדי לחשב אחוז מתוך מספר מסוים, יש לעקוב אחר השלבים הבאים:
            </Typography>
            <ul>
              <li>הכפלת המספר באחוז הרצוי.</li>
              <li>חילוק התוצאה ב-100.</li>
            </ul>
            <Typography paragraph>
              למשל, כדי לחשב כמה הם 25% מ-80, יש להכפיל את 80 ב-25 ואז לחלק ב-100:
            </Typography>
            <Typography>80 × 25 = 2000</Typography>
            <Typography>2000 ÷ 100 = 20</Typography>
            <Typography paragraph>כך, 25% מ-80 הם 20.</Typography>
            <Typography variant="h6">המרת שבר לאחוז ולהפך</Typography>
            <Typography paragraph>לצפייה בסרטון הסבר על המרת שבר לאחוז ולהפך, לחצו על הכפתור הבא:</Typography>
            <Button 
              variant="contained"
              onClick={() => {
                const url = 'https://youtu.be/U8ZUILgMUho';
                window.open(url, '_blank');
              }}
            >
              צפו בסרטון ההסבר
            </Button>
          </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Card>
          <CardHeader title="שאלה מילולית לדוגמא" />
          <CardContent>
            <Typography paragraph>
              שאלה: רותם קנתה זוג נעליים בהנחה של 20% מהמחיר המקורי. אם המחיר המקורי היה 250 שקלים, כמה רותם שילמה אחרי ההנחה?
            </Typography>
            <Typography variant="h6">פתרון:</Typography>
            <ol>
              <li>
                חישוב ההנחה:
                <ul>
                  <li>250 × 20 = 5000</li>
                  <li>5000 ÷ 100 = 50</li>
                  <li>כלומר, ההנחה היא 50 שקלים.</li>
                </ul>
              </li>
              <li>
                חישוב המחיר לאחר ההנחה:
                <ul>
                  <li>250 - 50 = 200</li>
                </ul>
              </li>
            </ol>
            <Typography variant="h6">תשובה: רותם שילמה 200 שקלים אחרי ההנחה.</Typography>
          </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Card>
          <CardHeader title="מבחן הבנה" />
          <CardContent>
            <Typography paragraph>ענו על השאלות הבאות:</Typography>
            <Box component="form" noValidate autoComplete="off">
              {[
                "1. חשבו כמה הם 75% מ-320.",
                "2. מכונית נסעה 60% מהמרחק הכולל של מסלול באורך 500 קילומטרים. כמה קילומטרים נסעה המכונית?",
                "3. חנות מכרה 80% מהמלאי שלה. אם נשארו 50 פריטים, כמה פריטים היו במלאי המקורי?",
                "4. מחיר מוצר עלה ב-25%. אם המחיר החדש הוא 150 שקלים, מה היה המחיר המקורי?",
                "5. בכיתה יש 30 תלמידים, מתוכם 40% בנים. כמה בנות יש בכיתה?",
                "6. המר את השבר 3/20 לאחוז.",
                "7. המר את השבר 150/500 לאחוז."
              ].map((question, index) => (
                <TextField
                  key={index}
                  label={question}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={answers[index + 1] || ''}
                  onChange={(e) => handleAnswerChange(index + 1, e.target.value)}
                />
              ))}
              <Button variant="contained" onClick={submitAnswers} sx={{ mt: 2 }}>
                הגש
              </Button>
            </Box>
            {showResults && (
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6">תוצאות:</Typography>
                {[240, 300, 250, 120, 18, "15%", "30%"].map((answer, index) => (
                  <Typography key={index}>
                    שאלה {index + 1}: {checkAnswer(index + 1, answer) ? "נכון" : `לא נכון. התשובה הנכונה היא ${answer}.`}
                  </Typography>
                ))}
              </Box>
            )}
          </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Card>
          <CardHeader title="קורס קיץ דיגיטלי ייעודי לצמצום פערים וחיזוק בחשבון" />
          <CardContent>
            <Typography paragraph>לחצו עכשיו וקבלו שיעור ראשון במתנה🎁</Typography>
            <Button 
              variant="contained"
              onClick={() => {
                const url = 'https://www.sciencedu.online/fun-fractions';
                window.location.href = url;
              }}
            >
              לקבלת השיעור הראשון במתנה
            </Button>
          </CardContent>
        </Card>
      </TabPanel>
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default Dashboard;
