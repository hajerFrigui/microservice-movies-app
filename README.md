# microservice-movies-app

1) Build a microservices app i.e decoupled services with specific objectives. The Frontend that responsible for display the application pages needs to interact with
different microservices through the API gateway to get the desired data. The main components for the movies application are:
  -Horror movies service(Node Js) : A backend service that returns the list of horror movies
  -Action movies service(SpringBoot) : A backend service provides the list of action movies.
  -UI/API Gateway (ReactJs & Laravel) Includes the user interface (UI) that the visitor uses to access a particular type of movie as well as a gateway that functions as middleware before the request is made to backend services.
Result: https://user-images.githubusercontent.com/40791467/194779825-efaf9944-d90d-4b91-9cdc-9fe3f72bb265.PNG

2) Create and build dockerfiles for each component of our application
Result :(https://user-images.githubusercontent.com/40791467/194779959-6f8d29ce-7260-440f-95d0-2c6d39a89170.PNG)

3) Push our code to Azure Repos (Azure devops)
Result : (https://user-images.githubusercontent.com/40791467/194779971-60d6333d-3035-468a-b01f-02144d3ca7b5.PNG)

3)Create a  CI/CD pipeline for earch component using Azure pipelines: it will build, test and deploy the app into our aks
Result :(https://user-images.githubusercontent.com/40791467/194780208-037515e3-2e9e-4816-8569-e24cc0525c9d.PNG)

(https://user-images.githubusercontent.com/40791467/194780218-fae20478-bd43-49d2-8607-903d5ac309c7.PNG)

4) Deploy to Azure Kubernetes Service (AKS)!
Result: (https://user-images.githubusercontent.com/40791467/194780089-543864ae-8ab3-4a3a-aa69-18a18c559444.PNG)

5)install Prometheus and Grafana to monitor our cluster
(https://user-images.githubusercontent.com/40791467/194780245-808fb16e-ff3e-4313-81cb-cf8f7cf39163.PNG)
(https://user-images.githubusercontent.com/40791467/194780238-102365a8-4d52-4a35-982f-a32efd575c7a.PNG)

6)get notification on our slack account  
(https://user-images.githubusercontent.com/40791467/194780258-28f90686-1852-4f3a-a006-bedc31db31d6.PNG)

7) build , run the stress test and  display the results in Grafana dashboards and the K6 cloud.
Results: 
(https://user-images.githubusercontent.com/40791467/194780886-f229df3e-ec0e-4b6a-8d94-4abb97901e5a.PNG)
(https://user-images.githubusercontent.com/40791467/194780895-b64cec80-3bc5-43e4-8b29-0896cffe68a0.PNG)
(https://user-images.githubusercontent.com/40791467/194780900-90f3421f-6c71-458c-a619-58d260659708.PNG)

