pipeline {
  agent any

  options {
    timeout(time: 2, unit: 'MINUTES')
  }

  environment {
    ARTIFACT_ID = "elbuo8/webapp:${env.BUILD_NUMBER}"
  }
   stages {
   stage('Building image') {
      steps{
          sh '''
          docker build -t testapp .
             '''  
        }
    }
  
    stage('Run tests') {
      steps {
        sh "docker run testapp npm test"
      }
    }
   stage('Deploy Image') {
      steps{
        sh '''
        docker tag testapp 127.0.0.1:5000/mguazzardo/testapp
        docker push 127.0.0.1:5000/mguazzardo/testapp   
        '''
        }
      }
     stage('Run application') {
      steps {
        sh '''
        docker stop testapp-container || true
        docker rm testapp-container || true
        docker run -d --name testapp-container -p 8081:80 127.0.0.1:5000/mguazzardo/testapp
        '''
      }  
    }
}


    
  

