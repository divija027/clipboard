const pythonCodes = {
    button1: `import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
dataset = pd.read_csv(r'C:\Users\bhata\Desktop\ML Lab Datasets\ML Lab␣
↪Datasets\5\Social_Network_Ads.csv')
X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, -1].values
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.25,␣
↪random_state = 0)
print(X_train[:10])
print(y_train[:10])
print(X_test[:10])
print(y_test[:10])
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)
print(X_train[:10])
print(X_test[:10])
from sklearn.naive_bayes import GaussianNB
classifier = GaussianNB()
classifier.fit(X_train, y_train)
y_pred = classifier.predict(X_test)
print(np.concatenate((y_pred.reshape(len(y_pred),1), y_test.
↪reshape(len(y_test),1)),1))
from sklearn.metrics import confusion_matrix, accuracy_score
cm = confusion_matrix(y_test, y_pred)
print(cm)
accuracy_score(y_test, y_pred)
from matplotlib.colors import ListedColormap
X_set, y_set = sc.inverse_transform(X_train), y_train
plt.scatter(X_set[:, 0], X_set[:, 1], c=y_set)
plt.title('Naive Bayes (Training set)')
plt.xlabel('Age')
plt.ylabel('Estimated Salary')
plt.show()
X_set, y_set = sc.inverse_transform(X_test), y_test
plt.scatter(X_set[:, 0], X_set[:, 1], c=y_set)
plt.title('Naive Bayes (Test set)')
plt.xlabel('Age')
plt.ylabel('Estimated Salary')
plt.show()
`,

    button2: `import pandas as pd
import numpy as np
df= pd.read_csv(r'C:\Users\bhata\Desktop\ML Lab Datasets\ML Lab␣
↪Datasets\7\Groceries_dataset.csv')
print("No of duplicates before:",df.duplicated().sum())
df.drop_duplicates(inplace=True)
print("No of duplicates after:",df.duplicated().sum())
combinacoes = df.groupby(['Member_number', 'Date']).agg({'itemDescription':␣
↪list}).reset_index()
combinacoes_list = combinacoes['itemDescription'].tolist()
print(combinacoes_list[0])
from mlxtend.preprocessing import TransactionEncoder
from mlxtend.frequent_patterns import apriori, association_rules
te = TransactionEncoder()
combinacoes_bool = te.fit_transform(combinacoes_list)
dataset = pd.DataFrame(combinacoes_bool, columns=te.columns_)
regras= apriori(dataset, min_support=0.001, use_colnames=True)
associacao_regras =association_rules(regras,metric='confidence',␣
↪min_threshold=0.1)
associacao_regras.sort_values(['confidence'], ascending=False)

`,

    button3: `import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
dataset = pd.read_csv(r'C:\Users\bhata\Desktop\ML Lab Datasets\ML Lab␣
↪Datasets\8\Mall_Customers.csv')
X = dataset.iloc[:, [3, 4]].values
print(X[:10])
from sklearn.cluster import KMeans
wcss = []
for i in range(1, 11):
kmeans = KMeans(n_clusters = i, init = 'k-means++', random_state = 42)
kmeans.fit(X)
wcss.append(kmeans.inertia_)
plt.plot(range(1, 11), wcss)
plt.title('The Elbow Method')
plt.xlabel('Number of clusters')
plt.ylabel('WCSS')
plt.show()
kmeans = KMeans(n_clusters = 5, init = 'k-means++', random_state = 42)
y_kmeans = kmeans.fit_predict(X)
print(y_kmeans)
 plt.scatter(X[y_kmeans == 0, 0], X[y_kmeans == 0, 1], s = 100, c = 'red', label␣
↪= 'Cluster 1')
plt.scatter(X[y_kmeans == 1, 0], X[y_kmeans == 1, 1], s = 100, c = 'blue',␣
↪label = 'Cluster 2')
plt.scatter(X[y_kmeans == 2, 0], X[y_kmeans == 2, 1], s = 100, c = 'green',␣
↪label = 'Cluster 3')
plt.scatter(X[y_kmeans == 3, 0], X[y_kmeans == 3, 1], s = 100, c = 'cyan',␣
↪label = 'Cluster 4')
plt.scatter(X[y_kmeans == 4, 0], X[y_kmeans == 4, 1], s = 100, c = 'magenta',␣
↪label = 'Cluster 5')
plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], s =␣
↪300, c = 'yellow', label = 'Centroids')
plt.title('Clusters of customers')
plt.xlabel('Annual Income (k$)')
plt.ylabel('Spending Score (1-100)')
plt.legend()
plt.show()
`,

    button4: `import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
dataset = pd.read_csv(r'C:\Users\bhata\Desktop\ML Lab Datasets\ML Lab␣
↪Datasets\9\Mall_Customers.csv')
X = dataset.iloc[:, [3, 4]].values
print(X[:10])
import scipy.cluster.hierarchy as sch
dendrogram = sch.dendrogram(sch.linkage(X, method = 'ward'))
plt.title('Dendrogram')
plt.xlabel('Customers')
plt.ylabel('Euclidean distances')
plt.show()
from sklearn.cluster import AgglomerativeClustering
hc = AgglomerativeClustering(n_clusters = 5, metric = 'euclidean', linkage =␣
↪'ward')
y_hc = hc.fit_predict(X)
plt.scatter(X[y_hc == 0, 0], X[y_hc == 0, 1], s = 100, c = 'red', label =␣
↪'Cluster 1')
plt.scatter(X[y_hc == 1, 0], X[y_hc == 1, 1], s = 100, c = 'blue', label =␣
↪'Cluster 2')
plt.scatter(X[y_hc == 2, 0], X[y_hc == 2, 1], s = 100, c = 'green', label =␣
↪'Cluster 3')
plt.scatter(X[y_hc == 3, 0], X[y_hc == 3, 1], s = 100, c = 'cyan', label =␣
↪'Cluster 4')
plt.scatter(X[y_hc == 4, 0], X[y_hc == 4, 1], s = 100, c = 'magenta', label =␣
↪'Cluster 5')
plt.title('Clusters of customers')
plt.xlabel('Annual Income (k$)')
plt.ylabel('Spending Score (1-100)')
plt.legend()
plt.show()
`,

    button5: `import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
dataset = pd.read_csv(r'C:\Users\bhata\Desktop\ML Lab Datasets\ML Lab␣
↪Datasets\10\Social_Network_Ads.csv')
X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, -1].values
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.25,␣
↪random_state = 0)
print(X_train[:10])
print(y_train[:10])
print(X_test[:10])
print(y_test[:10])
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)
print(X_train[:10])
print(X_test[:10])
from sklearn.ensemble import RandomForestClassifier
classifier = RandomForestClassifier(n_estimators = 10, criterion = 'entropy',␣
↪random_state = 0)
classifier.fit(X_train, y_train)
y_pred = classifier.predict(X_test)
print(np.concatenate((y_pred.reshape(len(y_pred),1), y_test.
↪reshape(len(y_test),1)),1))
from sklearn.metrics import confusion_matrix, accuracy_score
cm = confusion_matrix(y_test, y_pred)
print(cm)
accuracy_score(y_test, y_pred)
X_set, y_set = sc.inverse_transform(X_train), y_train
plt.scatter(X_set[:, 0], X_set[:, 1], c=y_set)
plt.title('Random Forest Classification (Training set)')
plt.xlabel('Age')
plt.ylabel('Estimated Salary')
plt.show()
X_set, y_set = sc.inverse_transform(X_test), y_test
plt.scatter(X_set[:, 0], X_set[:, 1], c=y_set)
plt.title('Random Forest Classification (Testing set)')
plt.xlabel('Age')
plt.ylabel('Estimated Salary')
plt.show()
` ,

    button6: `import numpy as np
import pandas as pd
import tensorflow as tf
dataset = pd.read_csv(r'C:\Users\bhata\Desktop\ML Lab Datasets\ML Lab␣
↪Datasets\11\Churn_Modelling.csv')
X = dataset.iloc[:, 3:-1].values
y = dataset.iloc[:, -1].values
print(X)
print(y)
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
X[:, 2] = le.fit_transform(X[:, 2])
print(X)
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
ct = ColumnTransformer(transformers=[('encoder', OneHotEncoder(), [1])],␣
↪remainder='passthrough')
X = np.array(ct.fit_transform(X)
print(X)
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2,␣
↪random_state = 0
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)
# Initializing the ANN
ann = tf.keras.models.Sequential()
# Adding the input layer and the first hidden layer
ann.add(tf.keras.layers.Dense(units=6, activation='relu'))
# Adding the second hidden layer
ann.add(tf.keras.layers.Dense(units=6, activation='relu'))
# Adding the output layer
ann.add(tf.keras.layers.Dense(units=1, activation='sigmoid'))
# Compiling the ANN
ann.compile(optimizer = 'adam', loss = 'binary_crossentropy', metrics =␣
↪['accuracy'])
# Training the ANN on the Training set
ann.fit(X_train, y_train, batch_size = 32, epochs = 20)
"""
Use ANN model to predict if the customer with the following informations will␣
↪leave the bank:
Geography: France
Credit Score: 600
Gender: Male
Age: 40 years old
Tenure: 3 years
Balance: $ 60000
Number of Products: 2
Does this customer have a credit card? Yes
Is this customer an Active Member: Yes
Estimated Salary: $ 50000
So, should we say goodbye to that customer?
"""
print(ann.predict(sc.transform([[1, 0, 0, 600, 1, 40, 3, 60000, 2, 1, 1,␣
↪50000]])) > 0.5)
y_pred = ann.predict(X_test)
y_pred = (y_pred > 0.5)
print(np.concatenate((y_pred.reshape(len(y_pred),1), y_test.
↪reshape(len(y_test),1)),1))
from sklearn.metrics import confusion_matrix, accuracy_score
cm = confusion_matrix(y_test, y_pred)
print(cm)
accuracy_score(y_test, y_pred)
` 
    
    

};

