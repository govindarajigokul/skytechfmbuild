import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import carimg from '../../assets/images/careerimg.jpg';
import axios from 'axios';

// Styled components
const StyledForm = styled(Box)({
  maxWidth: '700px',
  margin: '0 auto',
  padding: '30px',
  backgroundColor: '#fff',
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  '@media (min-width: 768px)': {
    padding: '40px',
  },
});

const HeroImage = styled(Box)({
  backgroundImage: `url(${carimg})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '100%',
  height: '350px',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'center',
  marginBottom: '30px',
  boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)',
});

const HeroText = styled(Typography)({
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '2.5rem',
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
  textAlign: 'center',
});

const GradientButton = styled(Button)({
  background: 'linear-gradient(45deg, #fc7200, #ff9300)',
  color: '#fff',
  padding: '10px 20px',
  textTransform: 'none',
  fontWeight: 'bold',
  transition: '0.3s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #ff9300, #fc7200)',
    boxShadow: '0px 4px 15px rgba(252, 114, 0, 0.4)',
  },
});


const Career = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    graduationYear: '',
    gender: '',
    experience: '',
    currentEmployer: '',
    currentCTC: '',
    expectedCTC: '',
    noticePeriod: '',
    skillSet: '',
    currentLocation: '',
    preferredLocation: '',
    resume: null,
  });
  const [fileName, setFileName] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === 'application/pdf' ||
        file.type === 'application/msword' ||
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    ) {
      setFormData({ ...formData, resume: file });
      setFileName(file.name);
    } else {
      alert('Please upload a PDF or Word document only.');
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    // Prepare FormData
    const formDetails = new FormData();
    Object.keys(formData).forEach((key) => {
      formDetails.append(key, formData[key]);
    });

    // Debug: Log FormData to console
    console.log('Form Data:', [...formDetails]); // Check the collected form data

    try {
      const response = await axios.post(
        'https://domain.selfmade.one/skytechmail/mail.php',
        formDetails,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      alert(
        response.data.status === 'success'
          ? response.data.message
          : 'Error: ' + response.data.message
      );
    } catch (error) {
      console.error('Axios error:', error);
      alert('Error: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <HeroImage>
        <HeroText>Join Our Team</HeroText>
      </HeroImage>

      <StyledForm>
        <Typography variant="h4" textAlign="center" mb={4} sx={{ color: '#0056b3' }}>
          Submit Your Application
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Contact"
            variant="outlined"
            fullWidth
            margin="normal"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <TextField
            label="Year of Graduation"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleChange}
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Gender</InputLabel>
            <Select
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Experience in Years"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
          <TextField
            label="Current Employer"
            variant="outlined"
            fullWidth
            margin="normal"
            name="currentEmployer"
            value={formData.currentEmployer}
            onChange={handleChange}
            required
          />
          <TextField
            label="Current CTC (in Lakhs)"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            name="currentCTC"
            value={formData.currentCTC}
            onChange={handleChange}
            required
          />
          <TextField
            label="Expected CTC (in Lakhs)"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            name="expectedCTC"
            value={formData.expectedCTC}
            onChange={handleChange}
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Notice Period</InputLabel>
            <Select
              label="Notice Period"
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleChange}
              required
            >
              <MenuItem value="Immediate">Immediate</MenuItem>
              <MenuItem value="15 Days">15 Days</MenuItem>
              <MenuItem value="30 Days">30 Days</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Skill Set"
            variant="outlined"
            fullWidth
            margin="normal"
            name="skillSet"
            value={formData.skillSet}
            onChange={handleChange}
            required
          />
          <TextField
            label="Current Location"
            variant="outlined"
            fullWidth
            margin="normal"
            name="currentLocation"
            value={formData.currentLocation}
            onChange={handleChange}
            required
          />
          <TextField
            label="Preferred Location"
            variant="outlined"
            fullWidth
            margin="normal"
            name="preferredLocation"
            value={formData.preferredLocation}
            onChange={handleChange}
            required
          />
          <GradientButton
            component="label"
            fullWidth
            sx={{ mt: 3 }}
          >
            Upload Resume
            <input
              hidden
              accept=".pdf,.doc,.docx"
              type="file"
              onChange={handleFileChange}
            />
          </GradientButton>
          <Typography variant="caption" color="textSecondary">
          {fileName ? `Uploaded: ${fileName}` : 'Please upload your resume.'}
          </Typography>

          <GradientButton type="submit" fullWidth sx={{ mt: 3 }}>
            Submit Application
          </GradientButton>
        </form>
      </StyledForm>
    </Box>
  );
};

export default Career; 