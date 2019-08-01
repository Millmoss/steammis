using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SanatTest : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKey(KeyCode.A))
        gameObject.transform.position = gameObject.transform.position + new Vector3(0, Time.deltaTime, 0);
    }
}
