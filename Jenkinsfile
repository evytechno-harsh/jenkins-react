pipeline {
  agent {
    docker {
      image 'node:20-alpine'
      args '-u root:root'
    }
  }
  environment {
    CI = 'true'
    APP_DIR = 'react-app'
  }
  stages {
    stage('Checkout') {
      steps {
        sh 'apk add --no-cache git'
        checkout scm
      }
    }
    stage('Install') {
      steps {
        dir("${APP_DIR}") {
          sh 'npm install'
        }
      }
    }
    stage('Test') {
      steps {
        dir("${APP_DIR}") {
          sh 'npm test -- --watchAll=false'
        }
      }
    }
    stage('Build') {
      steps {
        dir("${APP_DIR}") {
          sh 'npm run build'
        }
      }
    }
    stage('Archive') {
      steps {
        archiveArtifacts artifacts: "${APP_DIR}/build/**", fingerprint: true
      }
    }
  }
}
