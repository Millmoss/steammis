using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class jose : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKey(KeyCode.A))
        {
            gameObject.transform.position = gameObject.transform.position - new Vector3(0, 0, Time.deltaTime);
        }
        else if(Input.GetKey(KeyCode.D)) //d
        {
            gameObject.transform.position = gameObject.transform.position + new Vector3(0, 0, Time.deltaTime);
        }
        else if (Input.GetKey(KeyCode.W)) //w
        {
            gameObject.transform.position = gameObject.transform.position + new Vector3(Time.deltaTime, 0, 0);
        }
        else if (Input.GetKey(KeyCode.S)) //s
        {
            gameObject.transform.position = gameObject.transform.position - new Vector3(Time.deltaTime, 0, 0);
        }
    } 
        
}
