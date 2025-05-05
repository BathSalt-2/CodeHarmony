import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from './ui/Button';

const DemoSection = () => {
  const [activeTab, setActiveTab] = useState('webApp');

  const demoExamples = {
    webApp: {
      input: "Create a sign-up form with email validation, password strength meter, and submit button that shows a loading state.",
      output: `// SignupForm.jsx
import React, { useState } from 'react';
import { validateEmail, checkPasswordStrength } from './utils';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [strength, setStrength] = useState(0);
  
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    if (!validateEmail(value) && value.length > 0) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }
  };
  
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setStrength(checkPasswordStrength(value));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!emailError && strength >= 2) {
      setIsSubmitting(true);
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      // Handle success
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form implementation... */}
    </form>
  );
};

export default SignupForm;`
    },
    api: {
      input: "Create a Node.js API endpoint that handles user authentication with JWT tokens",
      output: `// auth.controller.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user by email
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(401).json({ 
        message: 'Authentication failed' 
      });
    }
    
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return res.status(401).json({ 
        message: 'Authentication failed' 
      });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    res.status(200).json({
      message: 'Authentication successful',
      token,
      userId: user._id,
      expiresIn: 3600
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Server error',
      error: error.message 
    });
  }
};`
    },
    mobile: {
      input: "Create a React Native component for displaying a user profile with avatar, stats, and edit button",
      output: `// ProfileCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileCard = ({ user, onEdit }) => {
  const { name, avatar, followers, following, posts } = user;
  
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image 
          source={{ uri: avatar }} 
          style={styles.avatar} 
        />
        <TouchableOpacity 
          style={styles.editButton}
          onPress={onEdit}
        >
          <MaterialIcons name="edit" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.name}>{name}</Text>
      
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{posts}</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{followers}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{following}</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  // Additional styles...
});

export default ProfileCard;`
    }
  };

  return (
    <section id="demo" className="section-padding bg-dark-300">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            See <span className="gradient-text">CodeHarmony</span> in Action
          </h2>
          <p className="text-white/70 text-lg">
            Type what you need in natural language, and watch as our AI transforms your 
            requirements into clean, functional code in seconds.
          </p>
        </div>

        {/* Demo Tabs */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex p-1 bg-dark-200 rounded-lg">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'webApp' 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setActiveTab('webApp')}
            >
              Web App
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'api' 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setActiveTab('api')}
            >
              API
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'mobile' 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setActiveTab('mobile')}
            >
              Mobile
            </button>
          </div>
        </div>

        {/* Demo Content */}
        <div className="bg-dark-200 rounded-xl overflow-hidden border border-dark-100 shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-dark-100">
            <div className="flex items-center">
              <Sparkles className="text-primary-500 mr-2" size={18} />
              <span className="font-semibold">CodeHarmony Workspace</span>
            </div>
            <Button variant="primary" size="sm" icon={<ArrowRight size={16} />} iconPosition="right">
              Try it yourself
            </Button>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-dark-100">
            {/* Input Panel */}
            <div className="p-5">
              <div className="mb-2 text-sm font-medium text-white/60">Input (Natural Language)</div>
              <div className="bg-dark-300 rounded-lg p-4 font-mono text-sm text-white/90 h-32 overflow-y-auto">
                {demoExamples[activeTab].input}
              </div>
            </div>

            {/* Output Panel */}
            <div className="p-5">
              <div className="mb-2 text-sm font-medium text-white/60">Output (Generated Code)</div>
              <pre className="bg-dark-400 rounded-lg p-4 overflow-auto max-h-96">
                <code className="language-javascript text-xs md:text-sm">
                  {demoExamples[activeTab].output}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/70 mb-6">
            Imagine the possibilities. Save hours of coding time and focus on what matters most.
          </p>
          <Button variant="secondary" size="lg">Explore More Examples</Button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;