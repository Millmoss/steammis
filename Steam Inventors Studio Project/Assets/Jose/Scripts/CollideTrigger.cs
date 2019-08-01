using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CollideTrigger : MonoBehaviour
{
    //bool triggerOn = false;
    public Collider collideObj;
    public GameObject gameObj;
    // Start is called before the first frame update
    void Start()
    {
        //get collider component
        collideObj = GetComponent<Collider>();
    }

    // Update is called once per frame
    void Update()
    {
       
    }
    private void OnTriggerEnter(Collider collideObj)
    {
        Destroy(gameObj);
    }
}
