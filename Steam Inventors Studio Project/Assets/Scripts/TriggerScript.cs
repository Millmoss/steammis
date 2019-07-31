using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TriggerScript : MonoBehaviour
{
    // Start is called before the first frame update
    
    void OnTriggerEnter(Collider Other) {
        gameObject.transform.position = new Vector3 (0, 2, 0);
        Destroy(gameObject);

    }
    

    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
