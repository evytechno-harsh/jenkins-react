pipeline {
  agent any
  environment {
    CI = 'true'
    APP_DIR = 'react-app'
  }
  stages {
    // stage('Checkout') {
    //   steps {
    //     sh 'apk add --no-cache git'
    //     checkout scm
    //   }
    // }

    stage('Install Node') {
      steps {
        sh '''
          apt-get update
          apt-get install -y nodejs npm
          node --version
          npm --version
        '''
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
        archiveArtifacts artifacts: "build/**", fingerprint: true
      }
    }
  }
}
